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
        <Link className="logo" to="/">
          <TBTCLogo width="165" />
        </Link>

        <div className={classNames('menu', { 'open': showMenu })}>
          <button className={classNames('menu-label', { 'open': showMenu })}
            onClick={toggleMenu}>
              Navigation
          </button>
          <ul className="nav-left">
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/news">Новости</Link></li>
            <li><Link to="/developers">Разработчикам</Link></li>
            <li><Link to="/faq">Ответы на вопросы</Link></li>
          </ul>
          <ul className="nav-right">
            <li><a className="mint-button" href="https://dapp.test.tbtc.network/" target="_blank" rel="noopener noreferrer">Создать tBTC</a></li>
            <li><a className="site-repo-link" href="https://github.com/keep-network/tbtc-website" target="_blank" rel="noopener noreferrer">Репозиторий</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
