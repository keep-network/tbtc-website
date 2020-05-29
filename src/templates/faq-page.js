/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { App } from '../components'


const Question = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={classNames('question', { 'open': isOpen })}>
        <h2 className="question-title" onClick={handleClick}>
            <span>{title}</span>
        </h2>
        <div className="question-answer">
            { children }
        </div>
    </div>
  )
}

export const FaqPageTemplate = ({ title, questions }) => (
  <div className="faq">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <header className="page-header col-sm-12 col-md-12 col-lg-10">
          <h1>{title}</h1>
        </header>
        <div className="questions col-sm-12 col-md-12 col-lg-10">
          {questions && questions.map((q, i) => (
            <Question title={q.question} key={`question-${i}`}>
              <div className="body" dangerouslySetInnerHTML={{ __html: q.answer }} />
            </Question>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const FaqPage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  return (
    <App title={post.frontmatter.title} locale={pageContext.locale}>
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
