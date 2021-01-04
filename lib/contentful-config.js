if (typeof window === 'undefined') {
  /**
   * Settings exposed to the server.
   */
  module.exports = {
    CONTENTFUL_API_URL: process.env.CONTENTFUL_API_URL,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  }
} else {
  /**
   * Settings exposed to the client.
   */
  module.exports = {
    CONTENTFUL_API_URL: process.env.CONTENTFUL_API_URL,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  }
}