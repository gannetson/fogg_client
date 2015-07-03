'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _configEnvironment = require('./config/environment');

var _configEnvironment2 = _interopRequireDefault(_configEnvironment);

var Router = _ember2['default'].Router.extend({
  location: _configEnvironment2['default'].locationType
});

Router.map(function () {
  this.route('home', { path: '' });

  this.route('users');
  this.route('user', { path: 'user/:user_id' });

  this.route('countries');
  this.route('country', { path: 'country/:country_id' });
});

exports['default'] = Router;
module.exports = exports['default'];

//# sourceMappingURL=router-compiled.js.map