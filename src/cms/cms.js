import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import ReactDOMServer from 'react-dom/server'

import moment from 'moment'

import "../css/app.scss"
import { AboutPageTemplate } from '../templates/about-page'
import { DevelopersPageTemplate } from '../templates/developers-page'
import { FaqPageTemplate } from '../templates/faq-page'
import { HomePageTemplate } from '../templates/home-page'
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
  return App({ children: DevelopersPageTemplate({
    title: entry.getIn(["data", "title"]),
    body: ReactDOMServer.renderToStaticMarkup(widgetFor("body")),
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

const HomePagePreview = ({ entry }) => {
  const entryHero = entry.getIn(["data", "hero"])
  const hero = entryHero ? entryHero.toJS() : []

  const entryFeatures = entry.getIn(["data", "features"])
  const features = entryFeatures ? entryFeatures.toJS() : []

  const entrySpotlight1 = entry.getIn(["data", "spotlight_1"])
  const spotlight1 = entrySpotlight1 ? entrySpotlight1.toJS() : []

  const entrySpotlight2 = entry.getIn(["data", "spotlight_2"])
  const spotlight2 = entrySpotlight2 ? entrySpotlight2.toJS() : []

  const entryExchangeList = entry.getIn(["data", "exchange_list_section"])
  const exchangeList = entryExchangeList ? entryExchangeList.toJS() : []

  const entryIntegrations = entry.getIn(["data", "integrations_section"])
  const integrations = entryIntegrations ? entryIntegrations.toJS() : []

  return App({ children: HomePageTemplate({
    title: entry.getIn(["data", "title"]),
    hero: hero,
    features: features,
    spotlight1: spotlight1,
    spotlight2: spotlight2,
    newsItems: [],
    exchangeList: exchangeList,
    integrations: integrations,
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
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("developers", DevelopersPagePreview)
CMS.registerPreviewTemplate("faq", FaqPagePreview)
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("news-item", NewsItemPreview)
CMS.registerPreviewTemplate("resource", ResourcePreview)
