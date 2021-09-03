module.exports = {
  plugins: [],
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:slug*`,
      },
    ]
  },
}
