import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { App } from '../components'


export const FaqPageTemplate = ({ title, questions }) => (
  <div className="faq">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <div className="col-sm-12 col-md-12 col-lg-10">
          <header>
            <h1>{title}</h1>
          </header>
          <div className="questions">
            {questions && questions.map((q, i) => (
              <div className="question" key={`question-${i}`}>
                <h2>{q.question}</h2>
                <div className="body" dangerouslySetInnerHTML={{ __html: q.answer }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

const FaqPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <App>
      <FaqPageTemplate
        title={post.frontmatter.title}
        questions={post.frontmatter.questions} />
    </App>
  )
}

FaqPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default FaqPage

export const pageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        questions {
          question
          answer
        }
      }
    }
  }
`
