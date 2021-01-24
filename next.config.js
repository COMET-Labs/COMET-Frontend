/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['drei', 'three']);
const Dotenv = require('dotenv-webpack');

module.exports = withTM({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
});
