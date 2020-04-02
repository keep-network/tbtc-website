import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'


const Spotlight = ({ children, className, sideLabelText, doubleLabel }) => (
  <div className={classNames('spotlight', { 'double-label': doubleLabel }, className)}>
    <div className="side-label-left">{sideLabelText}</div>
      { children }
    { doubleLabel ? (
      <div className="side-label-right">{sideLabelText}</div>
    ) : '' }
  </div>
)

Spotlight.propTypes = {
  className: PropTypes.string,
  sideLabelText: PropTypes.string,
  doubleLabel: PropTypes.bool
}

Spotlight.defaultProps = {
  doubleLabel: false
}

export default Spotlight
