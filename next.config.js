/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: ,
      //   port: "",
      // },
      { hostname: "icons.duckduckgo.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "upload.wikimedia.org"},
      { hostname: "media.licdn.com"},
      { hostname: "seeklogo.com"},

    ],
  },
};
