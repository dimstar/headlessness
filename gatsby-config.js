require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: process.env.HEADLESS_WP_URL,
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        // auth: {
        //   // JWT Auth
        //   jwt_user: process.env.JWT_USER,
        //   jwt_pass: process.env.JWT_PASSWORD,
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 1,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "/*/*/categories",
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/media",
          "/*/*/tags",
          "/*/*/taxonomies",
          "/*/*/users",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: [
          "/*/*/posts/1456",
          "/*/*/wp-rest-api-log/"
        ],
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "http://sandbox.test",
        //   replacementUrl: "http://api.sandbox.test",
        // },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
