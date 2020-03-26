import React from 'react'
import classNames from 'classnames'


function Announcement({ children, className, sideLabel }) {
    return (
        <div className={classNames('announcement', className)}>
            <div className="side-label-left">{sideLabel}</div>
            { children }
            <div className="side-label-right">{sideLabel}</div>
        </div>
    )
}

export default Announcement
