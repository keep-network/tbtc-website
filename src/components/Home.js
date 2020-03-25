import React, { Component } from 'react'
import { Link } from 'gatsby'

import MailingListForm from './lib/MailingListForm'


class Home extends Component {

  handleClickDeposit = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    // TODO navigate
  }

  handleClickRedeem = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    // TODO navigate
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-sm-12 col-md-10">
              Bitcoin,
              <br />
              On
              <br />
              Ethereum
              <div className="subtitle">
                <div className="vertical-aligned">
                  No games, just math.
                </div>
              </div>
            </div>
            <p className="announcement">
              Update
              <Link to="/news/2020-02-14-ropsten">tBTC is now live on Ropsten</Link>
            </p>
            <div className="step-by-step col-sm-12 col-md-10">
              <ol>
                <li>
                  Deposit BTC
                </li>
                <li>
                  Mint TBTC
                </li>
                <li>
                  Lend and earn interest on your BTC.
                </li>
              </ol>
            </div>
            <div className="mission-statement col-sm-12 col-md-10">
              <div className="hook">
                No middlemen. Period.
              </div>
              <div className="line-and-sinker">
                Censorship resistant, seizure resistant, inflation resistant.
              </div>
            </div>
            <div className="white-paper col-sm-12 col-md-10">
              <div className="white-paper-label">
                Learn how
              </div>
              <hr />
              <div className="white-paper-link">
                <a href="http://docs.keep.network/tbtc/index.pdf" target="_blank" rel="noopener noreferrer">
                  Read the Spec >>>>
                </a>
              </div>
            </div>
            <div className="newsletter col-sm-12 col-md-10">
              <MailingListForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
