import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Image from "./Image"

export const ExternalImageLink = ({ className, label, url, image = {} }) => (
  <a className={className} href={url} rel="noopener noreferrer" target="_blank">
    <Image imageData={image} />
    <span>{label}</span>
  </a>
)

ExternalImageLink.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export const InternalImageLink = ({ className, label, url, image = {} }) => (
  <Link className={className} to={url}>
    <Image imageData={image} />
    <span>{label}</span>
  </Link>
)

InternalImageLink.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const ImageLink = ({ internal = false, ...other }) => {
  if (internal) {
    return <InternalImageLink {...other} />
  }

  return <ExternalImageLink {...other} />
}

ImageLink.propTypes = {
  internal: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default ImageLink
