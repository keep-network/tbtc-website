import React from 'react'
import PropTypes from 'prop-types'

import '../../css/news-item.scss'

export const NewsItemTemplate = ({ title, date, description, body }) => {

    const paragraphs = body.split('\n\n').map(x => x.trim())

    return <div className="news">
        <div className="title">
            News
        </div>

        <div className='divider'></div>

        <div class="container">
            <div className='news-item'>
                <header>
                    <div>{date}</div>
                    <div>tBTC ANNOUNCEMENT</div>
                </header>

                <h2>
                    {title}
                </h2>

                <div class='body'>
                    {paragraphs.map(copy => <p dangerouslySetInnerHTML={{ __html: copy }} />)}
                </div>
            </div>
        </div>
    </div>
}

const NewsItem = ({ data }) => {
  const { markdownRemark: post } = data

  return <NewsItemTemplate
           date={post.frontmatter.date}
           description={post.frontmatter.description}
           body={post.html}
           title={post.frontmatter.title} />
}

NewsItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default NewsItem

export const pageQuery = graphql`
  query NewItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        description
      }
    }
  }
`
