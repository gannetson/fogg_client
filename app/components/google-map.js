import Ember from 'ember';

export default Ember.Component.extend({

    color: '#006600',
    map: null,
    featureStyle: function () {
        return {
            fillColor: this.get('color'),
            strokeWeight: 2,
            strokeColor: this.get('color')
        }
    }.property(),

    markCountry: function(country) {
        var _this = this,
            map= this.get('map'),
            file = '/geojson/' + country.id,
            unmarked = true;
        map.data.forEach(function(mark){
           if (mark.getProperty('iso_a2') == country.get('code2')) {
               unmarked = false;
           }
        });
        if (unmarked) {
            map.data.loadGeoJson(file);
        }
    },

    unmarkCountry: function(country) {
        var _this = this,
            map= this.get('map');
        map.data.forEach(function(mark){
           if (mark.getProperty('iso_a2') == country.get('code2')) {
               map.data.remove(mark);
           }
        });
    },

    updateCountries: function() {
        var _this = this,
            map= this.get('map');
        if (map) {
            this.get('countries').forEach(function(country){
                _this.markCountry(country);
            });
            this.get('countriesNeeded').forEach(function(country){
                _this.unmarkCountry(country);
            });
        }
    }.observes('countries.length', 'countriesNeeded.length', 'map'),

    didInsertElement: function () {
        "use strict";
        var amsterdam = new google.maps.LatLng(52, -5);
        var myOptions = {
            zoom: 3,
            center: amsterdam,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        var infoWindow = new google.maps.InfoWindow({});

        map.data.addListener('mouseover', function (event) {
            map.data.revertStyle();
            map.data.overrideStyle(event.feature, {fillOpacity: 0.7});
        });

        map.data.addListener('click', function (event) {
            //show an infoWindow on click
            infoWindow.setContent('<div style="line-height:1.35;overflow:hidden;white-space:nowrap;"> '+
                                        event.feature.getProperty('name') +"<br/></div>");
            var anchor = new google.maps.MVCObject();
            anchor.set("position",event.latLng);
            infoWindow.open(map,anchor);
        });

        map.data.addListener('mouseout', function (event) {
            map.data.revertStyle();
        });

        map.data.setStyle(this.get('featureStyle'));

        map.addListener('click', function (event) {
            //show an infoWindow on click
            infoWindow.setContent('<div style="line-height:1.35;overflow:hidden;white-space:nowrap;"> '+
                                        event.feature.getProperty('name') +"<br/></div>");
            var anchor = new google.maps.MVCObject();
            anchor.set("position",event.latLng);
            infoWindow.open(map,anchor);
        });

        this.set('map', map);
    }
});
