import React from 'react'

import App from './app'

import '../css/news-item.scss'

const News = ({ children }) => <App>
  <div className="news">
      <div className="title">
          News
      </div>

      <div className='divider'></div>

      <div class="container">
        { children }
      </div>
  </div>
</App>

const NewsSummary = ({ date, title, excerpt }) => <div class="news-summary">
  <time datetime={ date }>{ date }</time>
  <span>{ title }</span>
  <p
    dangerouslySetInnerHTML={{
      __html: excerpt
    }}
  />
</div>

export {
  News,
  NewsSummary
}
