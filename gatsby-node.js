const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

const writeConfig = require('./src/cms/config/index.js').writeConfig

const config = require('./gatsby-config')

const { defaultLocale, supportedLocales } = config.siteMetadata

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
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

  // Filter out the content that we don't want pages created for
  const postOrPage = result.data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.template !== "announcement");

  // Render pages based on their frontmatter template, if available, or a
  // default template at src/templates/default.js
  postOrPage.forEach(({ node }) => {
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
  fmImagesToRelative(node) // convert image paths for gatsby images

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
    const nonDefaultLocale = supportedLocales.filter(l => l !== defaultLocale)

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
