import React from 'react'

// Components
import { News, NewsSummary } from '../../components'

export default ({data, location}) => {
  const posts = data.allMarkdownRemark.edges.map((x) => x.node)
  return <News>
    { posts.map((node) =>
      <NewsSummary title={node.frontmatter.title}
                   excerpt={node.frontmatter.description || node.excerpt}
                   date={node.frontmatter.date} />) }
  </News>
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(format: HTML)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
          }
        }
      }
    }
  }
`
