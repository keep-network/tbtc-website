import React, { useState } from "react"
import classNames from "classnames"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import LanguageDropdown from "./LanguageDropdown"
import Link from "../LocaleLink"
import TBTCLogo from "../svgs/TBTCLogo"

const HeaderTemplate = ({ nav_items: navItems, locale }) => {
  const [showMenu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(! showMenu)
  }

  return (
    <header className="header container">
      <div className="row justify-content-center no-gutters">
        <nav className="nav col-sm-12 col-md-12 col-lg-10">
          <Link className="logo" to="/">
            <TBTCLogo width="165" />
          </Link>

          <div className={classNames("menu", { "open": showMenu })}>
            <button className={classNames("menu-label", { "open": showMenu })}
              onClick={toggleMenu}>
                Navigation
            </button>
            <ul className="menu-links">
              {navItems.map((item, i) => (
                <li key={`nav-item-${i}`}>
                  <Link to={item.url} activeClassName="active">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="discord-link icon-link"
                  to="https://chat.tbtc.network"
                  activeClassName="active"
                >
                  Discord
                </Link>
              </li>
              <li className="language-dropdown-wrapper">
                <LanguageDropdown locale={locale} />
              </li>
              <li className="fork-link-wrapper">
                <Link
                  className="fork-link icon-link"
                  to="https://github.com/keep-network/tbtc-website"
                  activeClassName="active"
                >
                  Fork
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

HeaderTemplate.propTypes = {
  nav_items: PropTypes.array,
}

export const query = graphql`
  query Header {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "header-nav" } } }
    ) {
      edges {
        node {
          fields {
            locale
          }
          frontmatter {
            nav_items {
              label
              url
            }
          }
        }
      }
    }
  }
`

const Header = ({ locale = "en" }) => (
  <StaticQuery
    query={query}
    render={data => {
      const match = data.allMarkdownRemark.edges
        .find(e => e.node.fields.locale === locale)
      return <HeaderTemplate {...match.node.frontmatter} locale={locale} />
    }}
  />
)

Header.propTypes = {
  locale: PropTypes.string
}

export default Header
