import React, { useState, useRef, useEffect } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

const Dropdown = ({ children, className, label }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const dropdownRef = useRef(null)
  useEffect(() => {
    const clickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    // Only add the listener if the dropdown is open, and make sure to clean
    // it up once it's closed
    if (isOpen) {
      document.addEventListener("click", clickOutside)
    } else {
      document.removeEventListener("click", clickOutside)
    }
  }, [dropdownRef, isOpen])

  return (
    <div className={classNames("dropdown", className, { "open": isOpen })}
      ref={dropdownRef}>
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
