/** @type {import('next').NextConfig} */

// const redirects = async () => {
//   return [
//     {
//       source: "/",
//       destination: "/login",
//       permanent: true,
//     },
//   ];
// };

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.rawg.io"],
  },
};

module.exports = nextConfig;
