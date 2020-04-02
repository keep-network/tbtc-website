import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import { App } from '../components'


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
                <Link to={node.frontmatter.path}>
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

const DevelopersPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { edges: resources } = data.allMarkdownRemark

  return (
    <App>
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
  query DevelopersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___date]},
      filter: {frontmatter: {template: {eq: "resource"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
