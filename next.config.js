/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GIT_TOKEN: process.env.GIT_TOKEN,
  },
};

module.exports = nextConfig;
