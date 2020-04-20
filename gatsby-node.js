const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

const config = require('./gatsby-config')

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

function langFromFilename(filename) {
  const potentialMatch = filename.match(/.*\.(\w+)\.\w+$/i)
  return potentialMatch && potentialMatch[1] || null
}

function languagePath(path, lang) {
  let pathComponents = path.split('/').filter(s => s !== '')
  let last = pathComponents.pop()

  if (last === `index.${lang}`) {
    last = ''
  } else {
    last = last.replace(new RegExp(`\\.${lang}$`, 'i'), '')
  }

  pathComponents.push(last)

  return `/${lang}/${pathComponents.join('/')}`
}

exports.onCreateNode = async ({ graphql, node, actions, getNode }) => {
  const { createNodeField } = actions

  const { defaultLanguage, supportedLanguages } = config.siteMetadata

  // set a slug for all markdown nodes, and use any supported 639-1 language
  // code prepended to the file extension to set a language-specific URL root
  if (node.internal.type === `MarkdownRemark`) {
    let lang = langFromFilename(node.fileAbsolutePath)
    let slug = createFilePath({ node, getNode })

    if (lang && supportedLanguages.includes(lang)) {
      if (lang !== defaultLanguage) {
        slug = languagePath(slug, lang)
      } else {
        lang = null
      }
    }

    lang = lang || defaultLanguage

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })

    createNodeField({
      name: `locale`,
      node,
      value: lang,
    })
  }
  // create new pages for non-default languages
  else if (node.internal.type === 'SitePage') {
    const nonDefaultLanguages = supportedLanguages.filter(l => l !== defaultLanguage)

    let lang = defaultLanguage
    if (node.component) {
      lang = langFromFilename(node.component)
      let path = node.path

      if (lang && supportedLanguages.includes(lang)) {
        if (lang !== defaultLanguage) {
          path = languagePath(path, lang)
        } else {
          lang = null
        }
      }

      lang = lang || defaultLanguage

      node.path = path

    }
    createNodeField({
      name: `locale`,
      node,
      value: lang,
    })
  }
}
