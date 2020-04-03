import React from 'react'
import { Link } from 'gatsby'
import { Announcement, Footer, Header, Newsletter } from './lib'

import '../css/app.scss'


export default (props) => {
  const { children } = props

  return (
    <div className="main">
      <Header />
      <Announcement>
        tBTC will launch on April 27th, 2020. Read more in <a href="https://www.bloomberg.com/news/articles/2020-04-02/bitcoin-s-ethereum-rivalry-could-be-assuaged-with-tbtc-bridge" target="_blank" rel="noreferrer">Bloomberg</a>.
      </Announcement>
      <div className="app">
        { children }
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}
