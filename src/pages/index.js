import React from 'react'
import { graphql } from 'gatsby'

// Styles
import '../css/app.scss'

// Components
import {
  App,
  Home
} from '../components'

export default ({ data }) => {
  const { edges: newsItems } = data.allMarkdownRemark
  return (
    <App>
      <Home newsItems={newsItems} />
    </App>
  )
}

// Query for latest news items, skip any entries that have a null path
export const query = graphql`
  query LatestNewsItems {
    allMarkdownRemark(limit: 3, sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {path: {ne: null}, template: {eq: "news-item"}}}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
` 