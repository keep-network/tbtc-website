import React, { Component } from 'react'
import { Link } from 'gatsby'

import Announcement from './lib/Announcement'
import MailingListForm from './lib/MailingListForm'
import SandDollar from './svgs/SandDollar'


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
            <Announcement sideLabel="Spec">
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
            </Announcement>
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
