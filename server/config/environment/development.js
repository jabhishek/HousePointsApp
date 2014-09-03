'use strict';
var localEnv = require('../local.env');

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: localEnv.mongoLabUri
  },

  seedDB: true
};
