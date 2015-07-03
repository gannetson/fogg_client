'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

exports['default'] = _ember2['default'].Route.extend({
  model: function model() {
    return this.get('store').find('user');
  }
});
module.exports = exports['default'];

//# sourceMappingURL=users-compiled.js.map