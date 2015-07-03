'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

exports['default'] = _ember2['default'].ObjectController.extend({

    allCountries: (function () {
        return this.get('store').find('country');
    }).property(),

    countriesNeeded: (function () {
        var array1 = this.get('allCountries');
        var array2 = this.get('model.countries');
        return array1.filter(function (item) {
            return array2.indexOf(item) < 0;
        });
    }).property('model.countries', 'allCountries.length'),

    actions: {
        addCountry: function addCountry(country) {
            this.get('model.countries').pushObject(country);
            this.get('model').save();
        },
        removeCountry: function removeCountry(country) {
            this.get('model.countries').removeObject(country);
            this.get('model').save();
        }
    }
});
module.exports = exports['default'];

//# sourceMappingURL=user-compiled.js.map