import React from 'react'
import { Announcement, Footer, Header, Newsletter } from './lib'
import SEO from './SEO.js'

import '../css/app.scss'

export default (props) => {
  const { children, title, description, locale } = props
  return (
    <div className="main">
      <Header />
      <SEO title={title} description={description} />
      <Announcement locale={locale} />
      <div className="app">
        { children }
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}
