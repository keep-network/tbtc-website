
import React from 'react'

// Styles
import '../../css/app.scss'

// Components
import {
  App,
  Home
} from '../../components'

export default () => <App>
  <Home noEntry={true} />
</App>

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: {date: DESC}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
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
