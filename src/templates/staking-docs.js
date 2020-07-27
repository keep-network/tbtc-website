import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { App } from '../components'
import { Article } from '../components/lib'

export const StakingDocsPageTemplate = ({ title, body, date }) => (
  <Article
    className="resource"
    title={title}
    body={body}
    date={date} />
)

const StakingDocPage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  // const title = post.frontmatter.heading ?
  //   post.frontmatter.heading : post.frontmatter.title

  return (
    <App title={"" /*post.document.title*/} locale={pageContext.locale}>
      <StakingDocsPageTemplate
        body={post.html}
        title={""}
        date={post.frontmatter.date} />
    </App>
  )
}

StakingDocPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default StakingDocPage

export const pageQuery = graphql`
  query StakingDocPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        heading
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
