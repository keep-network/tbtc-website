import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import { App } from '../components'
import { Article } from '../components/lib'


export const ResourceTemplate = ({ title, body }) => (
  <Article
    className="news-item"
    title={title}
    body={body} />
)

const Resource = ({ data }) => {
  const { markdownRemark: post } = data

  return <App>
    <ResourceTemplate
      body={post.html}
      title={post.frontmatter.title} />
  </App>
}

Resource.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Resource

export const pageQuery = graphql`
  query ResourceByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
