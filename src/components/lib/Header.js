import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

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
          <TBTCLogo width="165" />
        </a>

        <div className={classNames('menu', { 'open': showMenu })}>
          <button className={classNames('menu-label', { 'open': showMenu })}
            onClick={toggleMenu}>
              Navigation
          </button>
          <ul className="nav-left">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/developers">Build</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
          <ul className="nav-right">
            <li><a className="mint-button" href="http://dapp.test.tbtc.network/" target="_blank" rel="noopener noreferrer">Mint tBTC</a></li>
            <li><a className="site-repo-link" href="https://github.com/keep-network/tbtc-website" target="_blank" rel="noopener noreferrer">Repository</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
