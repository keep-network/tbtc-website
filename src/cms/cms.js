import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
