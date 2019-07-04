const path = require('path');

module.exports = () => ({
  siteMetadata: {
    title: 'Allanah Casey ',
    description: 'A description',
    author: '@power_board',
  },
  plugins: [
    'gatsby-plugin-styled-components',
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
  ],
});
