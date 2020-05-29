import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

import { withLocale } from "./App"

export const CustomLocaleLink = ({ children, to, locale, ...other }) =>
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultLocale,
          supportedLocales,
        },
      },
    }) => {

      let localeTo = to

      if (!supportedLocales.includes(locale)) {
        locale = defaultLocale
      }

      // strip any existing locale from the pathname
      localeTo = localeTo.replace(/^\/\w{2}\//, "/")

      if (locale !== defaultLocale) {
        localeTo = `/${locale}${localeTo}`
      }

      return <Link
        to={localeTo}
        {...other}>
        {children}
      </Link>
    }} />

CustomLocaleLink.propTypes = {
  to: PropTypes.string,
  locale: PropTypes.string
}

// Uses context automatically provide the active locale
export default withLocale(CustomLocaleLink)

const query = graphql`
  query SiteLocale {
    site {
      siteMetadata {
        supportedLocales,
        defaultLocale
      }
    }
  }
`
