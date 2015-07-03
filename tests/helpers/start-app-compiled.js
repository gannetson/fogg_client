'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = startApp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

var _router = require('../../router');

var _router2 = _interopRequireDefault(_router);

var _configEnvironment = require('../../config/environment');

var _configEnvironment2 = _interopRequireDefault(_configEnvironment);

function startApp(attrs) {
  var application;

  var attributes = _ember2['default'].merge({}, _configEnvironment2['default'].APP);
  attributes = _ember2['default'].merge(attributes, attrs); // use defaults, but you can override;

  _ember2['default'].run(function () {
    application = _app2['default'].create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}

module.exports = exports['default'];

//# sourceMappingURL=start-app-compiled.js.map