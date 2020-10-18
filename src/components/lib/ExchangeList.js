import React from "react"
import PropTypes from "prop-types"
import { formatImageLinkRows } from "./utils"
import RadarLogo from "../svgs/RadarLogo"
import MatchaLogo from "../svgs/MatchaLogo"
import UniswapLogo from "../svgs/UniswapLogo"
import BalancerLogo from "../svgs/BalancerLogo"
import classNames from "classnames"

const getExchangeListItems = () => {
  return [
    {
      url: "https://balancer.exchange/#/swap",
      name: "Balancer",
      logo: {
        alt: "balancer logo",
        image: (
          <BalancerLogo width="30" height="30" />
        ),
      },
    },
    {
      url: "https://app.uniswap.org/#/swap",
      name: "Uniswap",
      logo: {
        alt: "uniswap logo",
        image: (
          <UniswapLogo width="30" height="30" />
        ),
      },
    },
    {
      url: "https://relay.radar.tech/",
      name: "Radar",
      logo: {
        alt: "radar logo",
        image: (
          <RadarLogo width="30" height="30" />
        ),
      },
    },
    {
      url: "https://matcha.xyz/",
      name: "Matcha",
      logo: {
        alt: "matcha",
        image: (
          <MatchaLogo width="30" height="30" />
        ),
      },
    },
  ]
}

const ExchangeListItems = () => {
  const exchangeItems = getExchangeListItems()
  return <div className="exchange-items">{formatImageLinkRows(exchangeItems, 4, 'exchange')}</div>
}

const ExchangeList = ({ title }) => {
  return (
    <div className={classNames("exchange-list-container")}>
      <h1 className="section-title"> {title} </h1>
      <ExchangeListItems />
    </div>
  )
}

ExchangeList.propTypes = {
  title: PropTypes.string,
}

export default ExchangeList
