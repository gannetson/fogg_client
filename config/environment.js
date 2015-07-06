/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'default-src': "*",
      'connect-src': "'self' http://localhost:8000",
      'style-src': "'self' 'unsafe-inline' https://www.google.com https://*.googleapis.com https://*.gstatic.com",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://*.googleapis.com https://maps.gstatic.com",
      'font-src': "*",
      'img-src': "*"
    },
    modulePrefix: 'fogg-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      API_HOST: 'http://localhost:8000',
      API_NAMESPACE: 'api',
      API_ADD_TRAILING_SLASHES: false
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'http://fogg.ibizit.nl';
  }
  return ENV;
};
