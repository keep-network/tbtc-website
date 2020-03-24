import React from 'react'

import TBTCLogo from '../svgs/TBTCLogo'


function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-bottom">
          <div className="footer-logo">
            <TBTCLogo width="150" />
          </div>
          <div className="footer-links">
            <a href="https://crosschain.group" target="_blank" rel="noopener noreferrer">
              about
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
