import React from 'react'
import { Link } from 'gatsby'
import { Announcement, Footer, Header } from './lib'

export default (props) => {
  const { children } = props

  return (
    <div className="main">
      <Header />
      <Announcement>
        Update <Link to="/news/2020-02-14-ropsten">tBTC is now live on Ropsten</Link>
      </Announcement>
      <div className="app">
        { children }
      </div>
      <Footer />
    </div>
  )
}
