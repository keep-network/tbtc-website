import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { App } from './../components'
import Link from '../components/LocaleLink'

const News = ({ data }) => {
  const { edges: newsItems } = data.allMarkdownRemark
  return (
    <App title="News">
      <div className="news">
        <div className="container">
          <div className="row justify-content-center no-gutters">
            <header className="page-header col-sm-12 col-md-12 col-lg-10">
              <h1>News</h1>
              <Link to={`/news#mailing-list`}>Subscribe</Link>
            </header>
            <section className="col-sm-12 col-md-12 col-lg-10">
              { newsItems.map(({ node }) => (
                <div className="news-list-item" key={node.id}>
                  <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-4">
                      <h2>{node.frontmatter.title}</h2>
                      <p>{node.excerpt}</p>
                    </div>
                    <Link to={`/${node.fields.slug}`}>Read</Link>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </App>
  )
}

News.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      locale: PropTypes.string,
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    })
  })
}

export default News

// TODO: use fragment reuse query part https://www.gatsbyjs.org/docs/using-graphql-fragments/
// Query for latest news items, skip any entries that have a null path
export const query = graphql`
  query LatestNews($id: String!, $locale: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        locale
      }
    }
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: {frontmatter: {template: {eq: "news-item"}}, fields: {locale: {eq: $locale}}}
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            locale
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
