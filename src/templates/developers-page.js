import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { App } from '../components'
import Link from '../components/LocaleLink'


export const DevelopersPageTemplate = ({ title, body, resources }) => (
  <div className="developers">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <header className="page-header col-sm-12 col-md-12 col-lg-10">
          <h1>{title}</h1>
        </header>
        <div className="content col-sm-12 col-md-12 col-lg-10">
          <ul className="sidebar">
            <li>Resources</li>
            { resources && resources.map(({ node }) => (
              <li key={node.id}>
                <Link to={node.fields.slug}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    </div>
  </div>
)

const DevelopersPage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { edges: resources } = data.allMarkdownRemark

  return (
    <App title={post.frontmatter.title} locale={pageContext.locale}>
      <DevelopersPageTemplate
        title={post.frontmatter.title}
        body={post.html}
        resources={resources} />
    </App>
  )
}

DevelopersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default DevelopersPage

export const pageQuery = graphql`
  query DevelopersPage($id: String!, $locale: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { template: { eq: "resource" }, tags: { ne: "unlisted" } }
        fields: { locale: { eq: $locale } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
