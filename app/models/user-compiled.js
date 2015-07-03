'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _emberData = require('ember-data');

var _emberData2 = _interopRequireDefault(_emberData);

exports['default'] = _emberData2['default'].Model.extend({
  url: 'users',
  email: _emberData2['default'].attr('string'),
  username: _emberData2['default'].attr('string'),
  countries: _emberData2['default'].hasMany('country', { async: true })
});
module.exports = exports['default'];

//# sourceMappingURL=user-compiled.js.map