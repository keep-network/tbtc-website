import React from 'react'


const ButtonLink = ({ children, ...otherProps }) => (
    <a className="button-link" {...otherProps}>
        { children }
    </a>
)


export default ButtonLink
