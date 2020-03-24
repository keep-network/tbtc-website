import React from 'react'

import { Footer, Header } from './lib'

export default (props) => {
  const { children } = props

  return (
    <div className="main">
      <Header />
      <div className="app">
        { children }
      </div>
      <Footer />
    </div>
  )
}
