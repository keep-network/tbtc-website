import React from 'react'
import { graphql, StaticQuery } from 'gatsby'


const Announcement = ({ body }) => (
  <div className="announcement">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <div className="col-10 col-sm-12 col-md-12 col-lg-10 content">
          <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    </div>
  </div>
)


// Query for announcement
export const query = graphql`
  query Announcement {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "announcement" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={data => {
      const body = data.allMarkdownRemark.edges[0].node.html
      if (!body) {
        return null
      }
      return <Announcement body={body} />
    }}
  />
)
