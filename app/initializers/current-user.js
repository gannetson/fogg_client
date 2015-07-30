export function initialize(container, application) {
    //application.deferReadiness();
    //
    var session = container.lookup('session:current-user');

    debugger;
    if (session.access_token) {
        $.ajaxSetup({
            headers: { "Authorization": "Bearer " + session.access_token }
        });
    }
    //
    //container.lookup('store:main').find('user', 1).then(function(user) {
    //    application.register('user:current', user, { instantiate: false, singleton: true });
    //    application.inject('route', 'currentUser', 'user:current');
    //    application.inject('controller', 'currentUser', 'user:current');
    //    application.advanceReadiness();
    //}, function() {
    //    application.advanceReadiness();
    //});
}

export default {
    name: 'current-user',
    after: 'simple-auth',
    initialize: initialize
};
