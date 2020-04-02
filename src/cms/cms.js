import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import ReactDOMServer from 'react-dom/server'

import moment from 'moment'

import "../css/app.scss"
import { AboutPageTemplate } from '../templates/about-page'
import { DevelopersPageTemplate } from '../templates/developers-page'
import { FaqPageTemplate } from '../templates/faq-page'
import { NewsItemTemplate } from '../templates/news-item'
import { ResourceTemplate } from '../templates/resource'
import App from '../components/App'


const AboutPagePreview = ({ entry, widgetFor }) => {
  const entrySupporters = entry.getIn(["data", "supporters"])
  const supporters = entrySupporters ? entrySupporters.toJS() : []

  return App({ children: AboutPageTemplate({
    title: entry.getIn(["data", "title"]),
    body: ReactDOMServer.renderToStaticMarkup(widgetFor("body")),
    supporters: supporters
  }) })
}

const DevelopersPagePreview = ({ entry, widgetFor }) => {
  const entryResources = entry.getIn(["data", "resources"])
  const resources = entryResources ? entryResources.toJS() : []

  return App({ children: DevelopersPageTemplate({
    title: entry.getIn(["data", "title"]),
    body: ReactDOMServer.renderToStaticMarkup(widgetFor("body")),
    resources: resources
  }) })
}

const FaqPagePreview = ({ entry }) => {
  const entryQuestions = entry.getIn(["data", "questions"])
  const questions = entryQuestions ? entryQuestions.toJS() : []

  return App({ children: FaqPageTemplate({
    title: entry.getIn(["data", "title"]),
    questions: questions
  }) })
}

const NewsItemPreview = ({ entry, widgetFor }) => {
  return App({ children: NewsItemTemplate({
    title: entry.getIn(["data", "title"]),
    date: moment(widgetFor("date")).format("YYYY-MM-DD"),
    description: widgetFor("description"),
    body: ReactDOMServer.renderToStaticMarkup(widgetFor("body")),
  }) })
}

const ResourcePreview = ({ entry, widgetFor }) => {
  return App({ children: ResourceTemplate({
    title: entry.getIn(["data", "heading"]),
    date: moment(widgetFor("date")).format("YYYY-MM-DD"),
    body: ReactDOMServer.renderToStaticMarkup(widgetFor("body")),
  }) })
}

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
CMS.registerPreviewTemplate("about-page", AboutPagePreview)
CMS.registerPreviewTemplate("developers-page", DevelopersPagePreview)
CMS.registerPreviewTemplate("faq-page", FaqPagePreview)
CMS.registerPreviewTemplate("news-item", NewsItemPreview)
CMS.registerPreviewTemplate("resource", ResourcePreview)
