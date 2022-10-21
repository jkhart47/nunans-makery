/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
  images: {
    domains: ["cmsg.llc", "bonisainc.com"],
    loader: 'akamai',
    path: '',
  },
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });
    return config;
    }
  }