import React from "react"
import PropTypes from "prop-types"
import { formatImageLinkRows } from "./utils"
import {graphql, StaticQuery} from "gatsby";

const ExchangeListItems = ({ exchangeItems = [] }) => {
  return (
    <div className="exchange-items">
      {formatImageLinkRows(exchangeItems, 4, "exchange")}
    </div>
  )
}

ExchangeListItems.propTypes = {
  exchangeItems: PropTypes.array,
}

export const query = graphql`
  query ExchangeList {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "exchangeList" } } }
    ) {
      edges {
        node {
          frontmatter {
            exchangeList {
              name
              url
              logo {
                image {
                  childImageSharp {
                    fixed(width: 217, quality: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                  extension
                  publicURL
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

const ExchangeList = ({ title }) => {
  return (
    <div className="exchange-list-container">
      <h1 className="section-title"> {title} </h1>
      <StaticQuery
        query={query}
        render={(data) => {
          const exchangeItems =
            data.allMarkdownRemark.edges[0].node.frontmatter.exchangeList;
          if (!exchangeItems) {
            return null;
          }
          return <ExchangeListItems exchangeItems={exchangeItems} />;
        }}
      />
    </div>
  );
}

ExchangeList.propTypes = {
  title: PropTypes.string,
}

export default ExchangeList
