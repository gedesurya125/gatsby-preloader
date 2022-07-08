module.exports = {
  siteMetadata: {
    title: 'Creative websites for small businesses and people with ideas',
    description:
      // eslint-disable-next-line max-len
      'We build websites as a service and our innovative cms lets manage you everything afterwards. No upfront payment needed.',
    author: '@ThePuzzlers',
    shortTitle: 'Creative websites. Innovative cms',
    shortDescription:
      // eslint-disable-next-line max-len
      'Built by us. No upfront payments.',
    url: 'https://www.thepuzzlers.io',
    locales: {
      default: 'en'
    }
  },
  plugins: [
    'gatsby-theme-thepuzzlers-core',
    'gatsby-theme-thepuzzlers-legal-pages',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-theme-thepuzzlers-intl',
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ['en', 'de'],
        // language file path
        locales: {
          default: 'en',
          translations: [{ pathPrefix: 'de', hreflang: 'de' }]
        },
        translatedPaths: [
          { default: 'privacy-policy', de: 'datenschutz' },
          { default: 'legal', de: 'impressum' }
        ]
      }
    },
    // for nav data
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/data'
      }
    }
  ]
};
