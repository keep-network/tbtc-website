import React from 'react'
import { graphql } from 'gatsby'

import { App } from './../../components'


const News = ({}) => (
  <App>
    <div className="news">
      <div className="container">
        <div className="row justify-content-center no-gutters">
          <header className="page-header col-sm-12 col-md-12 col-lg-10">
            <h1>News</h1>
          </header>
        </div>
      </div>
    </div>
  </App>
)

export default News
