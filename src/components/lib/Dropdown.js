import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

const Dropdown = ({ children, className, label }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={classNames("dropdown", className, { "open": isOpen })}>
      <button className="dropdown-toggle" onClick={toggleOpen}>
        <span>{label}</span>
      </button>
      <div className="dropdown-menu">
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
