import React from 'react'

import TBTCLogo from '../svgs/TBTCLogo'

const Header = props => (
  <nav className="nav">
    <a className="logo" href="/">
      <TBTCLogo width="110" />
    </a>

    <ul>
      <li><a href="https://docs.keep.network/tbtc/" target="_blank">Read Spec</a></li>
      <li><a href="/#mailing-list">Get Updates</a></li>
    </ul>
  </nav>
)

export default Header
