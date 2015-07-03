"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ember = require("ember");

var _ember2 = _interopRequireDefault(_ember);

exports["default"] = _ember2["default"].Component.extend({

  didInsertElement: function didInsertElement() {
    "use strict";
    var amsterdam = new google.maps.LatLng(52, -5);
    var myOptions = {
      zoom: 3,
      center: amsterdam,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var kml = new google.maps.KmlLayer("https://sites.google.com/site/905robert/Home/countries_world.kml?attredirects=0");
    kml.setMap(map);
    //var l12 = new google.maps.KmlLayer('http://localhost:8000/kml/12');
    //l12.setMap(map);
  }
});
module.exports = exports["default"];

//# sourceMappingURL=google-map-compiled.js.map