import React from 'react'
import { Link } from 'gatsby'

import { MailingListForm, Spotlight } from './lib'
import SandDollar from './svgs/SandDollar'


const Home = ({ newsItems }) => (
  <div className="home">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <section className="hero col-sm-12 col-md-12 col-lg-10">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1>
                The safe way to earn with your Bitcoin.
              </h1>
              <h2 className="h3">
                Convert TBTC to BTC any time with no intermediaries.
              </h2>
            </div>
            <nav className="col-sm-12 col-md-6 quick-links">
              <ul>
                <li>
                  <Link to="/#mailing-list">
                    Get launch updates
                  </Link>
                </li>
                <li>
                  <a href="http://docs.keep.network/tbtc/index.pdf"
                    target="_blank" rel="noopener noreferrer">
                      Read the spec
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row justify-content-center no-gutter">
            <div className="col-10">
              <SandDollar className="sand-dollar-hero" />
            </div>
          </div>
        </section>
        <section className="step-by-step col-sm-12 col-md-12 col-lg-10">
          <ol className="row">
            <li className="col-12 col-sm-12 col-md-4">
              <div>Deposit BTC</div>
            </li>
            <li className="col-12 col-sm-12 col-md-4">
              <div>Mint TBTC</div>
            </li>
            <li className="col-12 col-sm-12 col-md-4">
              <div>Lend and earn interest on your BTC.</div>
            </li>
          </ol>
        </section>
        <section className="major-announcement col-sm-12 col-md-12 col-lg-10">
          <Spotlight className="spotlight-launch" sideLabelText="Announcement">
            <h1>
              Mainnet launch of tBTC<br/>
              announced for April 13th, 2020
            </h1>
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <p>
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.
                </p>
              </div>
              <div className="col-sm-12 col-md-4">
                <Link to="/#" target="_blank" rel="noopener noreferrer">
                  Read more
                </Link>
              </div>
            </div>
          </Spotlight>
        </section>
        <section className="latest-news col-sm-12 col-md-12 col-lg-10">
          <h1 className="section-title">Latest News</h1>
          <div className="row">
            { newsItems.map(({ node }) => (
              <div className="latest-news-item col-sm-12 col-md-4" key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.excerpt}</p>
                <Link to={`/${node.frontmatter.path}`}>Read more</Link>
              </div>
            ))}
          </div>
        </section>
        <section className="toolkit col-sm-12 col-md-12 col-lg-10">
          <Spotlight sideLabelText="Developers" doubleLabel>
            <div className="row">
              <div className="col-sm-12 col-md-7 col-xl-5 h1">
                Integrate TBTC to add Bitcoin to your dApp
              </div>
              <div className="col-sm-12 col-md-5 col-xl-7">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Developer Toolkit
                </a>
              </div>
            </div>
          </Spotlight>
        </section>
        <section className="integrations col-sm-12 col-md-12 col-lg-10">
          <h1 className="section-title">Integrations</h1>
          <ul>
            <li><a className="compound" href="https://compound.finance/">Compound</a></li>
            <li><a className="uniswap" href="https://uniswap.org/">Uniswap</a></li>
          </ul>
        </section>
        <section className="newsletter col-sm-12 col-md-12 col-lg-10">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <h2>Newsletter</h2>
              <p>Enter your email to receive updates</p>
            </div>
            <div className="col-sm-12 col-md-4 offset-md-1">
              <MailingListForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
)

export default Home
