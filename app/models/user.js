import DS from 'ember-data';

export default DS.Model.extend({
  url: 'users',
  email: DS.attr('string'),
  username: DS.attr('string'),
  countries: DS.hasMany('country', {async: true})
});
