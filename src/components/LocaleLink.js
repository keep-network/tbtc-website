import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"

import { withLocale } from "./App"

export const CustomLocaleLink = ({ children, to, locale, ...other }) => {
  if (/^http/.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...other}>
        {children}
      </a>
    )
  }

  return (
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

        // If the target locale isn't supported, default back to EN
        if (!supportedLocales.includes(locale)) {
          locale = defaultLocale
        }

        // Strip any existing locale prefix from the pathname
        const localePrefix = new RegExp(`^\\/(${supportedLocales.join('|')})\\/`)
        localeTo = localeTo.replace(localePrefix, "/")

        // Prefix the url with the target locale only if the target locale isn't
        // EN (the default locale), since the default locale doesn't require using
        // a prefix. localeTo should already include a leading backlash.
        if (locale !== defaultLocale) {
          localeTo = `/${locale}${localeTo}`
        }

        return <Link
          to={localeTo}
          {...other}>
          {children}
        </Link>
      }} />
  )
}

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
