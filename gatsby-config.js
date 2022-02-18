module.exports = {
  siteMetadata: {
      title: `contentful-website-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "0BTaZd0ezy1pHXX5ZoWcKK-y_t-I9givek93t-JFFdI",
      "spaceId": "4bb1sv112dz5"
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
      name: `pdf`,
      path: `${__dirname}/src/pdf/`,
    },
    __key: "images",
  },
  `gatsby-transformer-pdf`

]
};