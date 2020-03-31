import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import { App } from '../components'


export const NewsItemTemplate = ({ title, date, description, body }) => (
  <div className="news-item">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <div className="col-sm-12 col-md-12 col-lg-10">
          <header>
            <h1>{title}</h1>
          </header>
          <div className="content">
            <div className="date"><span>{date}</span></div>
            <div class="body" dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const NewsItem = ({ data }) => {
  const { markdownRemark: post } = data

  return <App>
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
