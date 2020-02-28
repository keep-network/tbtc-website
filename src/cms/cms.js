import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import ReactDOMServer from 'react-dom/server'

import moment from 'moment'

import "../css/app.scss"
import { NewsItemTemplate } from '../templates/news-item'
import App from '../components/App'

const NewsItemPreview = ({ entry, widgetFor }) => {
    return App({ children: NewsItemTemplate({
        title: entry.getIn(["data", "title"]),
        date: moment(widgetFor("date")).format("YYYY-MM-DD"),
        description: widgetFor("description"),
        body: ReactDOMServer.renderToStaticMarkup(widgetFor("body")),
    }) })
}

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
CMS.registerPreviewTemplate("news-item", NewsItemPreview)
