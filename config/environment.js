/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        contentSecurityPolicy: {
            'default-src': "*",
            'connect-src': "'self' http://localhost:8000 http://fogg.ibizit.nl ws://fogg.ibizit.nl:35729 http://map.ibizit.nl",
            'style-src': "'self' 'unsafe-inline' https://www.google.com https://*.googleapis.com https://*.gstatic.com",
            'script-src': "'self' 'unsafe-inline' 'unsafe-eval' ws://fogg.ibizit.nl:35729 https://connect.facebook.net http://connect.facebook.net http://fogg.ibizit.nl:35729  https://www.google.com https://*.googleapis.com https://maps.gstatic.com",
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
        facebook: {
            login_scope: 'email,user_photos,public_profile,user_friends',
            app_id: '916307071761187'
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

    ENV['simple-auth-oauth2'] = {
        serverTokenEndpoint: ENV.APP.API_HOST + "/auth/token"
    };
    ENV['simple-auth-convert-token'] = {
        url: ENV.APP.API_HOST + "/auth/convert-token"
    };

    ENV['simple-auth-token'] = {
        //serverTokenEndpoint: 'http://localhost:1337/login',
        //identificationField: 'email',
        //passwordField: 'password',
        tokenPropertyName: 'token',
        authorizationPrefix: 'Bearer ',
        authorizationHeaderName: 'Authorization',
        headers: {},
        refreshAccessTokens: false,
        tokenExpireName: 'expires',
        refreshLeeway: 0,
        timeFactor: 1  // example - set to "1000" to convert incoming seconds to milliseconds.
    };

    ENV['simple-auth'] = {
      //  authorizer: 'simple-auth-authorizer:token',
        authorizer: 'simple-auth-authorizer:oauth2-bearer',
        routeAfterAuthentication: '/my-map',
        session: 'session:current-user',
        store: 'simple-auth-session-store:local-storage'

    };
    return ENV;
};
