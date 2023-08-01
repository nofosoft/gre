/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    GIT_TOKEN: process.env.GIT_TOKEN,
  },
};

module.exports = nextConfig;
