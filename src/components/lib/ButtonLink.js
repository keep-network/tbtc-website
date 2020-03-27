import React from 'react'


function ButtonLink({ children, ...otherProps }) {
    return (
        <a className="button-link" {...otherProps}>
            { children }
        </a>
    )
}

export default ButtonLink
