const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpackDevMiddleware: config => {
    config.watchOptions.poll = 300;
    return config;
  }
};

module.exports = withPlugins([[withImages], [withSass]], nextConfig);
