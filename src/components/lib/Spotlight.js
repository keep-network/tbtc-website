import React from 'react'
import classNames from 'classnames'


const Spotlight = ({ children, className, sideLabel }) => (
  <div className={classNames('spotlight', className)}>
    <div className="side-label-left">{sideLabel}</div>
      { children }
    <div className="side-label-right">{sideLabel}</div>
  </div>
)

export default Spotlight
