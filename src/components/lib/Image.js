import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { withPrefix } from "gatsby"

const Image = ({ imageData, className = "" }) => {
  const { alt = "", childImageSharp, image } = imageData

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        className={className}
        alt={alt}
        {...image.childImageSharp}
      />
    )
  }

  if (!!childImageSharp) {
    return <Img className={className} alt={alt} {...childImageSharp} />
  }

  if (!!image && typeof image === "string") {
    return <img className={className} src={image} alt={alt} />
  }

  if (!!image && !!image.relativePath) {
    return (
      <img
        className={className}
        src={withPrefix(`/img/${image.relativePath}`)}
        alt={alt}
      />
    )
  }

  return null
}

Image.propTypes = {
  imageData: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }).isRequired,
  className: PropTypes.string,
}

export default Image
