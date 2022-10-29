/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  
  images: {
    domains: [
      "www.wedcell.com",
      "wedcell.com",
      "images.pexels.com",
      "wedcell.cloudjiffy.net",
      "wedcell.herokuapp.com",
      "www.vhv.rs",
      "vhv.rs",
      "pngset.com",
      "upload.wikimedia.org",
      "www.upload.wikimedia.org",
      "localhost"
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 


