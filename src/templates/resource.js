import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { graphql } from 'gatsby'

import { App } from '../components'
import { Article } from '../components/lib'


export const ResourceTemplate = ({ title, body, date, lineNumbers = false }) => (
  <Article
    className={classNames('resource', {'line-numbers': lineNumbers})}
    title={title}
    body={body}
    date={date} />
)

const Resource = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const title = post.frontmatter.heading ?
    post.frontmatter.heading : post.frontmatter.title

  return <App title={title} locale={pageContext.locale}>
    <ResourceTemplate
      body={post.html}
      title={title}
      date={post.frontmatter.date}
      lineNumbers={post.frontmatter.lineNumbers} />
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
        heading
        date(formatString: "YYYY-MM-DD")
        lineNumbers
      }
    }
  }
`
