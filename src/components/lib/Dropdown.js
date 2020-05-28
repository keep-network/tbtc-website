import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

const Dropdown = ({ children, className, label }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={classNames("dropdown", className)}>
      <button className="dropdown-toggle" onClick={toggleOpen}>
        {label}
      </button>
      <div className={classNames("dropdown-menu", { "open": isOpen })}>
        {children}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.node,
}

export default Dropdown
