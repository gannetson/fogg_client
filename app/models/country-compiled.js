'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _emberData = require('ember-data');

var _emberData2 = _interopRequireDefault(_emberData);

exports['default'] = _emberData2['default'].Model.extend({
  url: 'countries',
  name: _emberData2['default'].attr('string'),
  code2: _emberData2['default'].attr('string'),
  code3: _emberData2['default'].attr('string')
});
module.exports = exports['default'];

//# sourceMappingURL=country-compiled.js.map