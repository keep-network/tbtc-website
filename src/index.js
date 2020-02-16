import React from 'react'
import { render, hydrate } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'

// Styles
import './css/app.scss'

// Components
import {
  App,
  Home
} from './components'

import RopstenAnnouncementNewsItem from './components/news/2020-02-14-ropsten'
import TBTCJSNewsItem from './components/news/2020-02-14-announcing-tbtc-js'

// Redux
import history from './history'

// Set up our store
const middleware = []

const store = createStore(
  applyMiddleware(...middleware),
)

// Compose our static Landing Page
function StaticWrapper() {
  return (
    <Provider store={store}>
      <Router history={history}>
            <Route path="/news/2020-02-14-ropsten" exact>
                <App>
                    <RopstenAnnouncementNewsItem />
                </App>
              </Route>
            <Route path="/news/2020-02-14-announcing-tbtc-js" exact>
                <App>
                    <TBTCJSNewsItem />
                </App>
            </Route>
            <Route path="/" exact>
                <App>
                    <Home noEntry={true} />
                </App>
            </Route>
      </Router>
    </Provider>
  )
}

let Entry = StaticWrapper

// Render to DOM
window.addEventListener('load', () => {
  const rootElement = document.getElementById("root");

  if (rootElement.hasChildNodes()) {
    hydrate(<Entry />, rootElement)
  } else {
    render(<Entry />, rootElement)
  }
})
