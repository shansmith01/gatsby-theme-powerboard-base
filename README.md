# Gatsby Theme Powerboard - base

This is a simple starter theme for making new sites quickly. This is a work and progress and simply based on my preferences of how I choose to use gatsby.

## Core ideas

- Uses styled components and theme can be customised by component shadowing the theme/default file.
- Uses a config file to manage a basic responsive menu among other things.
- Again, menus and layout can be customised by component shadowing
- This is intended to be used as a base starting theme. Ecommerce functionality can be added with the gatsby-theme-powerboard-ecommerce

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save gatsby-theme-powerboard-base
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: ["gatsby-theme-powerboard-base"]
    };
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```
