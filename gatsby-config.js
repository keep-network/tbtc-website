module.exports = {
  siteMetadata: {
    title: "Bitcoin Everywhere",
    titleTemplate: "tBTC – %s",
    description:
      "Mint tBTC to use your Bitcoin everywhere. Decentralized and secure.",
    url: "https://tbtc.network",
    // supported 639-1 language codes
    supportedLocales: [
      "en",
      "de",
      "es",
      "fr",
      "id",
      "it",
      "ja",
      "ko",
      "pl",
      "ru",
      "vn",
      "zh",
    ],
    defaultLocale: "en",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "./src/favicon.svg",
        name: `tBTC`,
        shortName: "tBTC",
        description: "tBTC — Bitcoin Everywhere",
        start_url: `/`,
        display: `standalone`,
        // TODO
        // background_color: `#f7f0eb`,
        // theme_color: `#a2466c`,
        lang: "en",
        localize: [
          // TODO add other supported locales
          {
            start_url: `/de/`,
            lang: `de`,
            name: `tBTC`,
            short_name: `tBTC`,
            description: `tBTC — Bitcoin überall.`,
          },
        ],
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/header`,
        name: "header",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/footer`,
        name: "footer",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/integrations`,
        name: "integrations",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
  pathPrefix: "/" + process.env["GATSBY_BRANCH"],
}
