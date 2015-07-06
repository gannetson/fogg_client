/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'default-src': "*",
      'connect-src': "'self' http://localhost:8000 http://fogg.ibizit.nl ws://fogg.ibizit.nl:35729 http://map.ibizit.nl",
      'style-src': "'self' 'unsafe-inline' https://www.google.com https://*.googleapis.com https://*.gstatic.com",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' ws://fogg.ibizit.nl:35729 http://fogg.ibizit.nl:35729  https://www.google.com https://*.googleapis.com https://maps.gstatic.com",
      'font-src': "*",
      'img-src': "*",
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
      API_HOST: 'http://fogg.ibizit.nl',
      API_NAMESPACE: 'api',
      API_ADD_TRAILING_SLASHES: true
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

  }

  return ENV;
};
