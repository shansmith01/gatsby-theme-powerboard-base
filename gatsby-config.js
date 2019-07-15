const path = require('path');
const pkg = require('./package.json');

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
        modules: [pkg.name]
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
