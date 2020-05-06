import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Image = ({ imageData, className = "" }) => {
  const { alt = "", childImageSharp, image } = imageData

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        className={className}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!childImageSharp) {
    return <Img className={className} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === "string") {
    return <img className={className} src={image} alt={alt} />
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
