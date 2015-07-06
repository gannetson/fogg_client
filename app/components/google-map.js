import Ember from 'ember';

export default Ember.Component.extend({

    color: '#006600',
    map: null,
    featureStyle: function () {
        return {
            fillColor: this.get('color'),
            strokeWeight: 0,
            strokeColor: this.get('color'),
            fillOpacity: 0.2
        }
    }.property(),

	mapStyle: [{"featureType":"landscape","stylers":[{"hue":"#FFA800"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#53FF00"},{"saturation":-73},{"lightness":40},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FBFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#00FFFD"},{"saturation":0},{"lightness":30},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00BFFF"},{"saturation":6},{"lightness":8},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#679714"},{"saturation":33.4},{"lightness":-25.4},{"gamma":1}]}],
    mapStyle2: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":60}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":30}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ef8c25"},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b6c54c"},{"lightness":40},{"saturation":-40}]},{}],
    mapStyle3: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}],
    mapStyle4: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#449b38"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}],

    markCountry: function(country) {
        var _this = this,
            map= this.get('map'),
            file = '/geojson/' + country.id,
            unmarked = true;
        map.data.forEach(function(mark){
           if (mark.getProperty('iso_a2') == country.get('id')) {
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
           if (mark.getProperty('iso_a2') == country.get('id')) {
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
        var amsterdam = new google.maps.LatLng(52, -5);

        var myOptions = {
            zoom: 3,
            center: amsterdam,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        var MyMapType = new google.maps.StyledMapType(this.get("mapStyle"), {name: 'Grey'});
        var infoWindow = new google.maps.InfoWindow({});
        map.mapTypes.set('grey', MyMapType);
        map.setMapTypeId('grey');

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
