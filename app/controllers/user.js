import Ember from 'ember';

export default Ember.ObjectController.extend({

    allCountries: function(){
        return this.get('store').find('country');
    }.property(),

    countriesNeeded: function(){
        var array1 = this.get('allCountries');
        var array2 = this.get('model.countries');
        return array1.filter(function(item) {
            return array2.indexOf(item) < 0;
        });
    }.property('model.countries', 'allCountries.length'),

    actions: {
        addCountry: function(country){
            this.get('model.countries').pushObject(country);
            this.get('model').save();
        },
        removeCountry: function(country){
            this.get('model.countries').removeObject(country);
            this.get('model').save();
        }
    }
});
