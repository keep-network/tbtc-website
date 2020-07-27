const fs = require('fs')
const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

const { parseBaseConfig, writeConfig } = require('./src/cms/config/index.js')

const config = require('./gatsby-config')

const { defaultLocale, supportedLocales } = config.siteMetadata

exports.onPreBootstrap = () => {
  const base = parseBaseConfig()
  const fileCollections =
    base.collections.filter(c => c.name === "pages" || c.name === "header")
  const files = fileCollections
    .reduce((acc, curr) => acc.concat(curr.files.map(f => f.file )), [])
  const nonDefaultLocales = supportedLocales.filter(l => l !== defaultLocale)

  // Generate markdown pages for each locale for each file if they do not
  // already exist. File collections do not allow admin editors to create new
  // items in the collection. Each page must be explicitly added.
  // https://www.netlifycms.org/docs/collection-types/#file-collections
  // Since they are a copy, they will have English by default until edited.
  nonDefaultLocales.forEach(locale => {
    files.forEach(file => {
      const localeFile = file.replace(/(.*)\.(.*)$/, `$1.${locale}.$2`)
      if (!fs.existsSync(localeFile)) {
        fs.copyFileSync(file, localeFile)
      }
    })
  })
}

const createAsciidocPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allAsciidoc(
        filter: { paths: { absolute: { file: { regex: "/index.adoc/" } } } }
      ) {
        edges {
          node {
            id
            html
            timeToRead
            document {
              title
              subtitle
              main
            }
            #author {
            #  fullName
            #  firstName
            #  lastName
            #  middleName
            #  authorInitials
            #  email
            #}
            #revision {
            #  date
            #  number
            #  remark
            #}
            paths {
              absolute {
                file
              }
              from {
                source {
                  file
                  full
                }
              }
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Render pages based on their frontmatter template, if available, or a
  // default template at src/templates/default.js
  result.data.allAsciidoc.edges.forEach(({ node }) => {
    const template = path.resolve(path.join('src/templates/', `spec.js`))
    createPage({
      path: `spec/${node.paths.from.source.file}`,
      component: template,
      // additional data can be passed via context
      context: { id: node.id, /*locale: node.fields.locale*/ },
    })
  })
}

const createStakingDocsPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
  {
    allMarkdownRemark(filter:{ fileAbsolutePath: {regex: "/.*/staking-docs/.*/"} }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
        }
      }
    }
  }
`)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Render pages based on their frontmatter template, if available, or a
  // default template at src/templates/default.js
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const template = path.resolve(path.join('src/templates/', `staking-docs.js`))
    createPage({
      path: `staking-docs/${node.fields.slug}`,
      component: template,
      // additional data can be passed via context
      context: { id: node.id, /*locale: node.fields.locale*/ },
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  createAsciidocPages({ actions, graphql, reporter })
  createStakingDocsPages({ actions, graphql, reporter })
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(pages)/" } }
      ) {
        edges {
          node {
            id
            fields {
              locale
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Render pages based on their frontmatter template, if available, or a
  // default template at src/templates/default.js
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const templateName = node.frontmatter.template || `default`
    const template = path.resolve(path.join('src/templates/', `${templateName}.js`))
    createPage({
      path: node.fields.slug,
      component: template,
      // additional data can be passed via context
      context: { id: node.id, locale: node.fields.locale },
    })
  })
}

function localeFromFilename(filename) {
  const potentialMatch = filename.match(/.*\.(\w+)\.\w+$/i)
  return potentialMatch && potentialMatch[1] || null
}

function localePath(path, locale) {
  let pathComponents = path.split('/').filter(s => s !== '')
  let last = pathComponents.pop()

  if (last === `index.${locale}`) {
    last = ''
  } else {
    last = last.replace(new RegExp(`\\.${locale}$`, 'i'), '')
  }

  pathComponents.push(last)

  return `/${locale}/${pathComponents.join('/')}`
}

exports.onCreateNode = async ({ graphql, node, actions, getNode }) => {
  const { createNodeField } = actions
  
  // fmImagesToRelative is changing frontmatter links to relative links >:/
  if (!node.frontmatter ||
    (node.frontmatter && node.frontmatter.template !== `header-nav`)) {
    fmImagesToRelative(node) // convert image paths for gatsby images
  }

  // set a slug for all markdown nodes, and use any supported 639-1 language
  // code prepended to the file extension to set a language-specific URL root
  if (node.internal.type === `MarkdownRemark`) {
    let locale = localeFromFilename(node.fileAbsolutePath)

    if (!supportedLocales.includes(locale)) {
      locale = defaultLocale
    }

    let slug = createFilePath({ node, getNode })

    if (locale !== defaultLocale) {
      slug = localePath(slug, locale)
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })

    createNodeField({
      name: `locale`,
      node,
      value: locale,
    })
  }
  // create new pages for non-default localeuages
  else if (node.internal.type === 'SitePage') {
    let locale = defaultLocale
    if (node.component) {
      locale = localeFromFilename(node.component)

      if(!supportedLocales.includes(locale)) {
        locale = defaultLocale
      } else if (locale !== defaultLocale) {
        node.path = localePath(path, locale)
      }
    }
    createNodeField({
      name: `locale`,
      node,
      value: locale,
    })
  }
}

exports.onPostBootstrap = () => {
  // generate the netlify config
  writeConfig(path.join(__dirname, './static/admin/config.yml'))
}
