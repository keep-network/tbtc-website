import React, { useState } from 'react'
import classNames from 'classnames'

import TBTCLogo from '../svgs/TBTCLogo'

const Header = props => {
  const [showMenu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(! showMenu)
  }

  return (
    <header className="header">
      <nav className="nav">
        <a className="logo" href="/">
          <TBTCLogo width="160" />
        </a>

        <div className={classNames('menu', { 'open': showMenu })}>
          <button className={classNames('menu-label', { 'open': showMenu })}
            onClick={toggleMenu}>
              Navigation
          </button>
          <ul className="nav-left">
            <li><a href="https://crosschain.group" target="_blank" rel="noopener noreferrer">About</a></li>
          </ul>
          <ul className="nav-right">
            <li><a className="site-repo-link" href="https://github.com/keep-network/tbtc-website" target="_blank" rel="noopener noreferrer">Repository</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
