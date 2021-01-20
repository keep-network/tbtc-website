import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import {formatImageLinkRows} from "./utils";


const IntegrationsTemplate = ({ integrations = [] }) => (
  <div className="integration-items">
    {formatImageLinkRows(integrations, 4, 'integration')}
  </div>
)


IntegrationsTemplate.propTypes = {
  integrations: PropTypes.array,
}

export const query = graphql`
  query Integrations {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "integrations"}}}
    ) {
      edges {
        node {
          frontmatter {
            integrations {
              name
                url
                logo {
                  image {
                    childImageSharp {
                      fixed(width: 217, quality: 100) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                  alt
                }
            }
          }
        }
      }
    }
  }
`

const Integrations = () => (
  <StaticQuery
    query={query}
    render={data => {
      const integrations =
        data.allMarkdownRemark.edges[0].node.frontmatter.integrations
      if (!integrations) {
        return null
      }
      return <IntegrationsTemplate integrations={integrations} />
    }}
  />
)

export default Integrations
