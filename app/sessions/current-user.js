import Session from 'simple-auth/session';

export default Session.extend({
    user: function () {
        var accessToken = this.get('secure.access_token');
        debugger;
        if (!Ember.isEmpty(accessToken)) {
            $.ajaxSetup({
                headers: {"Authorization": "Bearer " + accessToken}
            });
            return this.container.lookup('store:main').find('user', 'current');
            //return DS.PromiseObject.create({
            //    promise: this.container.lookup('store:main').find('user', 'current')
            //});
        }
    }.property('secure.access_token')
});
