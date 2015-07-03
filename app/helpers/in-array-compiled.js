'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.inArray = inArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

function inArray(params) {
  return params[1].indexOf(params[0]) > -1;
}

exports['default'] = _ember2['default'].HTMLBars.makeBoundHelper(inArray);

//# sourceMappingURL=in-array-compiled.js.map