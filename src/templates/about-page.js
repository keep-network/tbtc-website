import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { App } from '../components'


export const AboutPageTemplate = ({ title, body, supporters }) => (
  <div className="about">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <div className="col-sm-12 col-md-12 col-lg-10">
          <header>
            <h1>{title}</h1>
            <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
            <a href="http://dapp.test.tbtc.network/" target="_blank" rel="noopener noreferrer">Mint tBTC</a>
          </header>
          <div className="supporters">
            {supporters && supporters.map((supporter, i) => (
              <div className="supporter" key={`supporters-${i}`}>
                <h2>{supporter.name}</h2>
                <p><span>{supporter.description}</span></p>
                <a href={supporter.url} target="_blank" rel="noopener noreferrer">Go</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(data)

  return (
    <App>
      <AboutPageTemplate
        title={post.frontmatter.title}
        body={post.html}
        supporters={post.frontmatter.supporters} />
    </App>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        supporters {
          description
          name
          url
        }
      }
    }
  }
`
