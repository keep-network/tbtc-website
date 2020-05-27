import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"

import ImageLink from "./ImageLink"


const IntegrationsTemplate = ({ integrations = [] }) => (
  <div className="integration-items">
    {formatRows(integrations, 4)}
  </div>
)


IntegrationsTemplate.propTypes = {
  integrations: PropTypes.array,
}

// Chunks integration items into rows of a given column number
function formatRows(items, numColumns) {
  const chunks = []
  while(items.length) {
    chunks.push(items.splice(0, numColumns))
  }

  return chunks.map((chunk, i) => (
    <div className={`row ${chunk.length < numColumns ? "uneven" : ""}`}
      key={`integration-row-${i}`}>
      {chunk.map((item, j) => (
        <ImageLink
          key={`integration-${j}`}
          url={item.url}
          label={item.name}
          image={item.logo}
        />
      ))}
    </div>
  ))
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
