module.exports = {
  siteMetadata: {
    title: "Anant Ehsaas Foundation",
    author: "Saurabh Miglani",
    description: "&lt;Insert quick description here&gt;"
  },
  // pathPrefix: "/anant-ehsaas",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/aef_logo_32.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
