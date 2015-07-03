import DS from 'ember-data';

export default DS.Model.extend({
  url: 'countries',
  name: DS.attr('string'),
  code2: DS.attr('string'),
  code3: DS.attr('string')
});
