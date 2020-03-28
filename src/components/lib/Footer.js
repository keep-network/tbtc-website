import React from 'react'

import TBTCLogo from '../svgs/TBTCLogo'


function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <TBTCLogo width="165" />
      </div>
      <nav className="footer-menu">
        <div className="top-menu">
          <ul>
            <li>
              <a href="https://crosschain.group" target="_blank" rel="noopener noreferrer">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-menu">
          <p className="copyright">&copy; 2020 tBTC</p>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
