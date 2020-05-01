import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'


const Resources = ({ data }) => {
  const { edges: resources } = data.allMarkdownRemark

  return <section className="resources col-sm-12 col-md-12 col-lg-10">
    <h1 className="section-title">Build with tBTC</h1>
    <div className="row">
      { resources && resources.map(({ node }) => (
          <div className="resource-item" key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
            <Link to={`${node.fields.slug}`}>go</Link>
          </div>
      ))}
    </div>
  </section>
}

Resources.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    })
  })
}

// Query for latest news items, skip any entries that have a null path
export const query = graphql`
  query Resources {
    allMarkdownRemark(
      limit: 3,
      sort: {order: ASC, fields: [frontmatter___date]},
      filter: {frontmatter: {template: {eq: "resource"}}}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={data => <Resources data={data} />}
  />
)
