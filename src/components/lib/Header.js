import React, { useState } from 'react'
import { Link } from 'gatsby'

import TBTCLogo from '../svgs/TBTCLogo'

const Header = props => {
  const [showMenu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(! showMenu)
  }

  let menuClass = "menu-label"
  if (showMenu) {
    menuClass += " open"
  }

  return <nav className="nav">
    <a className="logo" href="/">
      <TBTCLogo width="110" />
    </a>

    <ul>
      <li className={menuClass} onClick={toggleMenu}><button>Navigation</button></li>
      <li><a href="https://docs.keep.network/tbtc/" target="_blank">Read Spec</a></li>
      <li><Link to="/#mailing-list">Get Updates</Link></li>
    </ul>
  </nav>
}

export default Header
