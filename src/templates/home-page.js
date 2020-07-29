import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { App } from '../components'
import { Integrations, Spotlight } from '../components/lib'
import SandDollar from '../components/svgs/SandDollar'
import Link from '../components/LocaleLink'

export const HomePageTemplate = ({
  hero = {},
  features = [],
  spotlight1 = {},
  spotlight2 = {},
  newsItems = [],
  resources = [],
  integrations = {}
}) => {
  return <div className="home">
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
                className="col-12 col-sm-12 col-md-6 col-lg-3">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </li>
            )) }
          </ol>
        </section>
        <section className="major-announcement col-sm-12 col-md-12 col-lg-10">
          <Spotlight className="spotlight-launch" sideLabelText={spotlight1.label}>
            <h1>
              {spotlight1.title}
            </h1>
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <div className="body" dangerouslySetInnerHTML={{ __html: spotlight1.body }}/>
              </div>
              <div className="col-sm-12 col-md-4">
                {spotlight1.button ? (
                  <a className="spotlight-button-link"
                    href={spotlight1.button.url} target="_blank" rel="noopener noreferrer">
                    {spotlight1.button.text}
                  </a>
                ) : ''}
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
                <Link locale={node.fields.locale} to={`${node.fields.slug}`}>Read more</Link>
              </div>
            ))}
          </div>
        </section>
        <section className="toolkit col-sm-12 col-md-12 col-lg-10">
          <Spotlight sideLabelText="Developers" doubleLabel>
            <div className="row">
              <div className="col-sm-12 col-md-7 col-xl-5 h1">
                {spotlight2.title}
              </div>
              <div className="col-sm-12 col-md-5 col-xl-7">
                <a href={spotlight2.button.url}>
                  {spotlight1.button.text}
                </a>
              </div>
            </div>
          </Spotlight>
        </section>
        <section className="resources col-sm-12 col-md-12 col-lg-10">
          <h1 className="section-title">Build with tBTC</h1>
          <div className="row">
            { resources && resources.map(({ node }) => (
              <div className="resource-item col-sm-12 col-md-4" key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.excerpt}</p>
                <Link locale={node.fields.locale} to={`${node.fields.slug}`}>Go</Link>
              </div>
            ))}
          </div>
        </section>
        <section className="integrations col-sm-12 col-md-12 col-lg-10">
          <h1 className="section-title">{integrations.title}</h1>
          <Integrations />
        </section>
      </div>
    </div>
  </div>
}

const HomePage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { edges: newsItems } = data.featuredNews
  const { edges: resources } = data.latestResources

  return (
    <App locale={pageContext.locale}>
      <HomePageTemplate
        hero={post.frontmatter.hero}
        features={post.frontmatter.features}
        spotlight1={post.frontmatter.spotlight_1}
        spotlight2={post.frontmatter.spotlight_2}
        newsItems={newsItems}
        resources={resources}
        integrations={post.frontmatter.integrations_section} />
    </App>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    featuredNews: PropTypes.shape({
      edges: PropTypes.array,
    }),
    latestResources: PropTypes.shape({
      edges: PropTypes.array,
    })
  })
}

export default HomePage

// Query for latest news items, skip any entries that have a null path
export const query = graphql`
  query HomePage($id: String!, $locale: String!) {
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
        spotlight_1 {
          title
          label
          body
          button {
            text
            url
          }
        }
        spotlight_2 {
          title
          label
          button {
            text
            url
          }
        }
        integrations_section {
          title
        }
      }
    }

    featuredNews: allMarkdownRemark(
      limit: 3,
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: {frontmatter: {template: {eq: "news-item"}, tags: {eq: "featured"}}, fields: {locale: {eq: $locale}}}
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            locale
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }

    latestResources: allMarkdownRemark(
      limit: 3,
      sort: {order: DESC, fields: [frontmatter___date]},
      filter: {frontmatter: {template: {eq: "resource"}}, fields: {locale: {eq: $locale}}}
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            locale
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
