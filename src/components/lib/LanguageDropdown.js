import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import classNames from "classnames"
import { useLocation } from "@reach/router"

import Dropdown from "./Dropdown"
import { CustomLocaleLink as Link } from "../LocaleLink"

const LanguageDropdownTemplate = ({ languages = [], selectedLanguage }) => {
  /* eslint-disable no-redeclare */
  try {
    var location = useLocation()
  } catch (error) {
    var location = window.location
  }

  // strip prefix build name from url if present
  const pathname =
    location.pathname.replace(`/${process.env.GATSBY_BRANCH}/`, "/")

  return (
    <Dropdown className="language-dropdown" label={selectedLanguage}>
      <ul className="language-list">
        {languages.map((lang, i) => (
          <li key={`language-${i}`}>
            <Link
              to={pathname}
              locale={lang}
              className={classNames({"selected": lang === selectedLanguage})}
            >
              {lang}
            </Link>
          </li>
        ))}
      </ul>
    </Dropdown>
  )
}

LanguageDropdownTemplate.propTypes = {
  nav_items: PropTypes.array,
  dapp_link: PropTypes.object,
}

export const query = graphql`
  query LanguageDropdown {
    site {
      siteMetadata {
        supportedLocales
      }
    }
  }
`

const LanguageDropdown = ({ locale = "en" }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { supportedLocales } = data.site.siteMetadata

      return (
        <LanguageDropdownTemplate
          languages={supportedLocales}
          selectedLanguage={locale}
        />
      )
    }}
  />
)

LanguageDropdown.propTypes = {
  locale: PropTypes.string
}

export default LanguageDropdown