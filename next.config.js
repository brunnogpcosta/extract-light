/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination:'/pages/dashboard/',
            permanent: true,
          },
        ]
      },
      compiler:{
        styledComponents: true
      }
}

module.exports = nextConfig
