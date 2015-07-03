"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ember = require("ember");

var _ember2 = _interopRequireDefault(_ember);

exports["default"] = _ember2["default"].Component.extend({
  //elementId: 'regions_div',

  didInsertElement: function didInsertElement() {
    "use strict";
    google.load("visualization", "1", { packages: ["geochart"] });
    google.setOnLoadCallback(function () {});
  }
});
module.exports = exports["default"];

//var data = google.visualization.arrayToDataTable([
//  ["NL"],
//  ["BE"]
//]);
//var options = {};
//var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
//chart.draw(data, options);

//# sourceMappingURL=geo-chart-compiled.js.map