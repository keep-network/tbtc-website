import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { App } from '../components'
import { Helmet } from 'react-helmet'

export const SpecPageTemplate = ({ title, body, supporters }) => {
  useEffect(() => {
    window.mermaid.initialize({ theme: 'neutral' })
    window.mermaid.init('.mermaid > .content > pre')
  })

  return <div className="spec documentation">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <div className="col-sm-12 col-md-12 col-lg-10">
            <Helmet>
              <script async type="text/javascript" src="https://unpkg.com/mermaid@8.5.2/dist/mermaid.min.js"></script>
            </Helmet>
            <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    </div>
  </div>
}

const SpecPage = ({ data, pageContext }) => {
  const { asciidoc: post } = data
console.log('obai')

  return (
    <App title={post.document.title} locale={pageContext.locale}>
      <SpecPageTemplate
        title={post.document.title}
        body={post.html} />
    </App>
  )
}

SpecPage.propTypes = {
  data: PropTypes.shape({
    asciidoc: PropTypes.object,
  }),
}

export default SpecPage

export const pageQuery = graphql`
  query SpecPage($id: String!) {
    asciidoc(id: { eq: $id }) {
      id
      html
      document {
        title
      }
    }
  }
`
