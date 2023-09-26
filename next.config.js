/** @type {import('next').NextConfig} */
const nextConfig = {
  // This has to be removed Once we have access to Strapi
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  }

};

module.exports = nextConfig;
