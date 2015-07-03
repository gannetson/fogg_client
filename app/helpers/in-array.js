import Ember from 'ember';

export function inArray(params) {
  return params[1].indexOf(params[0]) > -1;

}

export default Ember.HTMLBars.makeBoundHelper(inArray);
