import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { App } from '../components'
import { Image, Integrations } from '../components/lib'
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
              <p>
                { hero.subtitle }
              </p>
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
                className="col-12 col-sm-12 col-md-6 col-xl-3">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </li>
            )) }
          </ol>
        </section>
      </div>
    </div>
    <section className="billboard">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-10">
            <h1>
              {spotlight1.title}
            </h1>
            <div className="body" dangerouslySetInnerHTML={{ __html: spotlight1.body }}/>
            {spotlight1.button ? (
              <a className="billboard-button-link"
                href={spotlight1.button.url} target="_blank" rel="noopener noreferrer">
                {spotlight1.button.text}
              </a>
            ) : ''}
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <section className="latest-news col-sm-12 col-md-12 col-lg-10">
          <h1 className="section-title">Latest News</h1>
          <div className="row">
            { newsItems && newsItems.map(({ node }) => (
              <div className="latest-news-item col-sm-12 col-lg-4" key={node.id}>
                <div className="date">{node.frontmatter.date}</div>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.excerpt}</p>
                <Link locale={node.fields.locale} to={`${node.fields.slug}`}>Read more</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <section className={`tailored-cta ${spotlight2.align}`}>
      <div className="container">
        <div className="side-label">{spotlight2.label}</div>
        <div className="row">
          <div className="tailored-cta-content col-sm-12 col-md-12 col-lg-8">
            <h2>{spotlight2.title}</h2>
            <a href={spotlight2.button.url}>
              {spotlight1.button.text}
            </a>
          </div>
          <div className="tailored-cta-image col-sm-12 col-md-12 col-lg-4">
            <Image imageData={spotlight2.image} />
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="row justify-content-center no-gutters">
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
          image {
            image {
              childImageSharp {
                fluid(maxWidth: 490, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          align
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
            date(formatString: "YYYY-MM-DD")
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
