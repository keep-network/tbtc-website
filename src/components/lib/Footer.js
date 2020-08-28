import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from "prop-types"

import Image from "./Image"
import Link from "../LocaleLink"
import TBTCLogo from '../svgs/TBTCLogo'


const FooterTemplate = ({
  nav_columns: navColumns,
  copyright_text: copyright,
}) => (
  <footer>
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <div className="col-sm-12 col-lg-10">
          <div className="footer-logo">
            <TBTCLogo width="230" />
          </div>
          <nav className="footer-menu">
            {navColumns.map((col, i) => (
              <ul key={`nav-column-${i}`}>
                {col.items.map((item, j) => (
                  <li key={`nav-item-${j}`}>
                    <Link to={item.url}>
                      {item.icon ? <Image imageData={item.icon} /> : ""}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>
        <div className="copyright col-sm-12 col-lg-10">
          {copyright}
        </div>
      </div>
    </div>
  </footer>
)

export const query = graphql`
  query Footer {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "footer-nav" } } }
    ) {
      edges {
        node {
          fields {
            locale
          }
          frontmatter {
            nav_columns {
              items {
                label
                url
                icon {
                  image {
                    relativePath
                  }
                  alt
                }
              }
            }
            copyright_text
          }
        }
      }
    }
  }
`

const Footer = ({ locale = "en" }) => (
  <StaticQuery
    query={query}
    render={data => {
      const match = data.allMarkdownRemark.edges
        .find(e => e.node.fields.locale === locale)
      return <FooterTemplate {...match.node.frontmatter} locale={locale} />
    }}
  />
)

Footer.propTypes = {
  locale: PropTypes.string
}

export default Footer
