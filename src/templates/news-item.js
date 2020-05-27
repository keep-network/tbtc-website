import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import { App } from '../components'
import { Article } from '../components/lib'


export const NewsItemTemplate = ({ title, date, body }) => (
  <Article
    className="news-item"
    title={title}
    date={date}
    body={body} />
)

const NewsItem = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  return <App title={post.frontmatter.title}
              description={post.frontmatter.description}
              locale={pageContext.locale}>
    <NewsItemTemplate
      date={post.frontmatter.date}
      description={post.frontmatter.description}
      body={post.html}
      title={post.frontmatter.title} />
  </App>
}

NewsItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default NewsItem

export const pageQuery = graphql`
  query NewsItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        description
      }
    }
  }
`
