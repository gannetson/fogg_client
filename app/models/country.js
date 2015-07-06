import DS from 'ember-data';

export default DS.Model.extend({
  url: 'countries',
  name: DS.attr('string')
});
