import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { App } from '../components'
import { Spotlight } from '../components/lib'
import SandDollar from '../components/svgs/SandDollar'


export const HomePageTemplate = ({ hero, newsItems, features }) => (
  <div className="home">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <section className="hero col-sm-12 col-md-12 col-lg-10">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1>
                { hero.title }
              </h1>
              <h2 className="h3">
                { hero.subtitle }
              </h2>
            </div>
            <nav className="col-sm-12 col-md-6 quick-links">
              <ul>
                { hero.buttons && hero.buttons.map((button, i) => (
                  <li key={`hero-button-${i}`}>
                    <Link to={button.url}>
                      { button.text }
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="row justify-content-center no-gutter">
            <div className="col-10">
              <SandDollar className="sand-dollar-hero" />
            </div>
          </div>
        </section>
        <section className="features col-sm-12 col-md-12 col-lg-10">
          <ol className="row">
            { features && features.map((feature, i) => (
              <li key={`feature-${i}`}
                className="col-12 col-sm-12 col-md-3">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </li>
            )) }
          </ol>
        </section>
        <section className="major-announcement col-sm-12 col-md-12 col-lg-10">
          <Spotlight className="spotlight-launch" sideLabelText="Announcement">
            <h1>
              Mainnet launch of tBTC<br/>
              announced for April 27th, 2020
            </h1>
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <p>
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.
                </p>
              </div>
              <div className="col-sm-12 col-md-4">
                <Link to="/#" target="_blank" rel="noopener noreferrer">
                  Read more
                </Link>
              </div>
            </div>
          </Spotlight>
        </section>
        <section className="latest-news col-sm-12 col-md-12 col-lg-10">
          <h1 className="section-title">Latest News</h1>
          <div className="row">
            { newsItems && newsItems.map(({ node }) => (
              <div className="latest-news-item col-sm-12 col-md-4" key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.excerpt}</p>
                <Link to={`/${node.frontmatter.path}`}>Read more</Link>
              </div>
            ))}
          </div>
        </section>
        <section className="toolkit col-sm-12 col-md-12 col-lg-10">
          <Spotlight sideLabelText="Developers" doubleLabel>
            <div className="row">
              <div className="col-sm-12 col-md-7 col-xl-5 h1">
                Integrate TBTC to add Bitcoin to your dApp
              </div>
              <div className="col-sm-12 col-md-5 col-xl-7">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Developer Toolkit
                </a>
              </div>
            </div>
          </Spotlight>
        </section>
        <section className="integrations col-sm-12 col-md-12 col-lg-10">
          <h1 className="section-title">Integrations</h1>
          <ul>
            <li><a className="compound" href="https://compound.finance/">Compound</a></li>
            <li><a className="uniswap" href="https://uniswap.org/">Uniswap</a></li>
          </ul>
        </section>
      </div>
    </div>
  </div>
)

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data
  const { edges: newsItems } = data.allMarkdownRemark

  return (
    <App>
      <HomePageTemplate
        hero={post.frontmatter.hero}
        features={post.frontmatter.features}
        newsItems={newsItems} />
    </App>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    })
  })
}

export default HomePage

// Query for latest news items, skip any entries that have a null path
export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        hero {
          title
          subtitle
          buttons {
            text
            url
          }
        }
        features {
          title
          description
        }
      }
    }
    allMarkdownRemark(
      limit: 3,
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: {frontmatter: {path: {ne: null}, template: {eq: "news-item"}}}
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
