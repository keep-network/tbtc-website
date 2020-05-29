import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import classNames from "classnames"
import { useLocation } from "@reach/router"

import Dropdown from "./Dropdown"
import Link from "../LocaleLink"

const LanguageDropdownTemplate = ({ languages = [], selectedLanguage }) => {
  const location = useLocation()
  return (
    <Dropdown className="language-dropdown" label={selectedLanguage}>
      <ul classNames="language-list">
        {languages.map((lang, i) => (
          <li key={`language-${i}`}>
            <Link
              to={location.pathname}
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