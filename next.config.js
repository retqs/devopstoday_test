/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');

const config = {
  env: {},
  pageExtensions: ['jsx', 'tsx', 'ts', 'js'],
};

module.exports = withImages(config);
