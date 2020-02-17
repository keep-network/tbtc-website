import React from 'react'

// Styles
import '../css/app.scss'

// Components
import {
  App,
  Home
} from '../components'

export default () => <App>
  <Home noEntry={true} />
</App>
