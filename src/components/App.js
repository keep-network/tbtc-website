import React from 'react'
import { Announcement, Footer, Header, Newsletter } from './lib'
import SEO from './SEO.js'

import '../css/app.scss'

const LocaleContext = React.createContext({})

const App = ({ children, title, description, locale }) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      <div className="main" lang={locale}>
        <Header locale={locale} />
        <SEO title={title} description={description} />
        <Announcement locale={locale} />
        <div className="app">
          { children }
        </div>
        <Newsletter />
        <Footer />
      </div>
    </LocaleContext.Provider>
  )
}

export function withLocale(Child) {
  return (props) => (
    <LocaleContext.Consumer>
      {({ locale }) => <Child {...props} locale={locale} />}
    </LocaleContext.Consumer>
  )
}

export const LocaleConsumer = LocaleContext.Consumer

export default App
