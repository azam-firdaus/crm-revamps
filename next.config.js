module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: true,
        },
      ];
    },
    images: {
        domains: ['images.unsplash.com'],
    },
  };