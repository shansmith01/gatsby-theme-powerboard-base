const path = require('path');

module.exports = () => ({
  siteMetadata: {
    siteUrl: 'https://www.example.com',
    title: 'Allanah Casey ',
    description: 'A description',
    author: '@power_board',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        // replace with the name of your theme
        modules: ['gatsby-theme-powerboard'],
      },
    },

    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: 'https://www.example.com',
      },
    },
  ],
});
