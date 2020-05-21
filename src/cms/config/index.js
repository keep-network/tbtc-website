const fs = require('fs')
const path = require('path')
const YAML = require('yaml')

const config = require('../../../gatsby-config.js')

const { defaultLocale, supportedLocales } = config.siteMetadata
const nonDefaultLocales = supportedLocales.filter(l=>l !== defaultLocale)

function parseBaseConfig() {
  const configPath = path.join(__dirname, './base-config.yml')
  const contents = fs.readFileSync(configPath, 'utf8')
  return YAML.parse(contents)
}

exports.parseBaseConfig = parseBaseConfig

function generateConfig() {
  const base = parseBaseConfig()

  let newCollections = []

  // if only JS had mapcat
  base.collections.forEach((collection) => {
    if(collection.folder !== undefined) {
      let extension = collection.extension || 'md'
      let format = collection.format || 'frontmatter'
      newCollections.push(collection)
      nonDefaultLocales.forEach(lang => newCollections.push({
        ...collection,
        extension: `${lang}.${extension}`,
        format,
        name: `${collection.name}-${lang}`,
        label: `${collection.label} (${lang})`
      }))
    }
    else if(collection.files !== undefined) {
      newCollections.push(collection)
      nonDefaultLocales.forEach(lang => newCollections.push({
        ...collection,
        name: `${collection.name}-${lang}`,
        label: `${collection.label} (${lang})`,
        files: collection.files.map((f) => ({
          ...f,
          name: `${f.name}-${lang}`,
          label: `${f.name} (${lang})`,
          file: f.file.replace(/(.*)\.(.*)$/, `$1.${lang}.$2`)
        }))
      }))
    }
  })

  return {
    ...base,
    collections: newCollections
  }
}

exports.generateConfig = generateConfig

exports.writeConfig = function(filename) {
  let dirPath = path.dirname(filename)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
  fs.writeFile(
    filename,
    YAML.stringify(generateConfig(), { indent: 2 }),
    err => { if (err) { throw err } }
  )
}
