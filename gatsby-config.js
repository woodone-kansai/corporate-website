module.exports = {
  siteMetadata: {
    title: `My Awesome Blog`,
    description: `An awesome blog displaying my awesome posts.`,
    author: `Masa`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `m25mh8u0aaa8`,
        accessToken: `pYYnDL79qLeo5WBoaUCPmXF7BDCt8-vGQTUnY5b6VdA`
      }
    },
    `gatsby-plugin-sass`,
  ],
}
