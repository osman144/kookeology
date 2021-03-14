var dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `By Naima Abdi`,
    description: `Bakery`,
    author: `@flotiq`,
  },
  plugins: [{
      "resolve": "gatsby-source-flotiq",
      "options": {
        "authToken": process.env.GATSBY_FLOTIQ_API_KEY,
        "forceReload": false,
        "includeTypes": ['product', '_media']
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kookeology`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4DB58E`,
        theme_color: `#4DB58E`,
        display: `minimal-ui`,
        icon: `src/images/kookeology_cropped_lighter.png`,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-instagram-embed',
            options: {
              width: 320,
              height: 320,
            },
          },
          `gatsby-remark-responsive-iframe`, // optional plugin but recommended
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
  ],
}
