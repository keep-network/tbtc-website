const fs = require('fs')
const path = require('path')
const YAML = require('yaml')

const config = require('../../../gatsby-config.js')

const { defaultLanguage, supportedLanguages } = config.siteMetadata
const nonDefaultLanguages = supportedLanguages.filter(l=>l !== defaultLanguage)

function generateConfig() {
  const configPath = path.join(__dirname, './base-config.yml')
  const contents = fs.readFileSync(configPath, 'utf8')
  const base = YAML.parse(contents)

  let newCollections = []

  // if only JS had mapcat
  base.collections.forEach((collection) => {
    if(collection.folder !== undefined) {
      let extension = collection.extension || 'md'
      let format = collection.format || 'frontmatter'
      newCollections.push(collection)
      nonDefaultLanguages.forEach(lang => newCollections.push({
        ...collection,
        extension: `${lang}.${extension}`,
        format,
        name: `${collection.name}-${lang}`,
        label: `${collection.label} (${lang})`
      }))
    }
    else if(collection.files !== undefined) {
      newCollections.push(collection)
      nonDefaultLanguages.forEach(lang => newCollections.push({
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
