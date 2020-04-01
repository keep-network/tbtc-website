import React from 'react'
import { Link } from 'gatsby'

import TBTCLogo from '../svgs/TBTCLogo'


const Footer = () => (
  <footer>
    <div className="footer-logo">
      <TBTCLogo width="165" />
    </div>
    <nav className="footer-menu">
      <div className="top-menu">
        <ul>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/news">
              News
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom-menu">
        <p className="copyright">&copy; 2020 tBTC</p>
      </div>
    </nav>
  </footer>
)

export default Footer
