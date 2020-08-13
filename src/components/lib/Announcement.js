import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"


const AnnouncementTemplate = ({ body }) => (
  <div className="announcement">
    <div className="container">
      <div className="row no-gutters">
        <div className="content">
          <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    </div>
  </div>
)

AnnouncementTemplate.propTypes = {
  body: PropTypes.string
}

// Query for announcement
export const query = graphql`
  query Announcement {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "announcement" } } }
    ) {
      edges {
        node {
          html
          fields {
            locale
          }
        }
      }
    }
  }
`

const Announcement = ({ locale = "en" }) => (
  <StaticQuery
    query={query}
    render={data => {
      const match = data.allMarkdownRemark.edges
        .find(e => e.node.fields.locale === locale)
      const { html: body } = match.node
      if (!body) {
        return null
      }
      return <AnnouncementTemplate body={body} />
    }}
  />
)

Announcement.propTypes = {
  locale: PropTypes.string
}

export default Announcement
