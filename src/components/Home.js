import React, { Component } from 'react'
import { Link } from 'gatsby'

import ButtonLink from './lib/ButtonLink'
import MailingListForm from './lib/MailingListForm'
import SandDollar from './svgs/SandDollar'
import Spotlight from './lib/Spotlight'


function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row justify-content-center no-gutters">
          <div className="hero col-sm-12 col-md-12 col-lg-10">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h1>
                  Bitcoin,<br />
                  On Ethereum
                </h1>
                <h2 className="h3">
                  No games, just math.
                </h2>
              </div>
              <nav className="col-sm-12 col-md-6 quick-links">
                <ul>
                  <li>
                    <ButtonLink href="#mailing-list">
                      Get launch updates
                    </ButtonLink>
                  </li>
                  <li>
                    <ButtonLink href="http://docs.keep.network/tbtc/index.pdf"
                      target="_blank" rel="noopener noreferrer">
                        Read the spec
                    </ButtonLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <p className="announcement">
            Update
            <Link to="/news/2020-02-14-ropsten">tBTC is now live on Ropsten</Link>
          </p>
          <div className="step-by-step col-sm-12 col-md-12 col-lg-10">
            <ol className="row">
              <li className="col-4">
                <div>Deposit BTC</div>
              </li>
              <li className="col-4">
                <div>Mint TBTC</div>
              </li>
              <li className="col-4">
                <div>Lend and earn interest on your BTC.</div>
              </li>
            </ol>
          </div>
          <div className="mission-statement col-sm-12 col-md-12 col-lg-10">
            <h1 className="section-title">Mission</h1>
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <SandDollar className="sand-dollar" />
              </div>
              <div className="col-sm-12 col-md-7">
                <h2 className="h1">No Middlemen.<br />Period.</h2>
                <p>
                  Censorship resistant, seizure resistant, inflation resistant.
                </p>
              </div>
            </div>
          </div>
          <div className="white-paper col-sm-12 col-md-12 col-lg-10">
            <Spotlight sideLabel="Spec">
              <div className="row">
                <div className="col-sm-12 col-md-5 h1">
                  Learn how
                </div>
                <div className="col-sm-12 col-md-7">
                  <a href="http://docs.keep.network/tbtc/index.pdf" target="_blank" rel="noopener noreferrer">
                    Read the Spec >>>>
                  </a>
                </div>
              </div>
            </Spotlight>
          </div>
          <div className="newsletter col-sm-12 col-md-12 col-lg-10">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <h2>Newsletter</h2>
                <p>Enter your email to receive updates</p>
              </div>
              <div className="col-sm-12 col-md-4 offset-md-1">
                <MailingListForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
