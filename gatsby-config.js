require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `ウッドワン関西`,
    description: `ウッドワン関西は、阪神間でオーナー様のご自宅を施工してまいりました。これからも皆さまの生活に寄り添った快適な間取り、性能、デザインを追求してまいります。`,
    siteUrl: `https://woodonekansai.jp`,
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Woodone Kansai`,
        short_name: `woodonekansai`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/woodonekansai-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-jsx`,
      options: {
        jsxPlugins: ['styled-jsx-plugin-sass'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-155715498-1`,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
