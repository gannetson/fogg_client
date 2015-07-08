import Ember from 'ember';

export default Ember.ObjectProxy.extend({
    init: function(){
        this.set('content', this.store.find('user', 'current'));
    }
});
