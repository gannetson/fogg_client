export function initialize(container, application) {
    application.inject('route', 'user', 'service:current-user');
    application.inject('controller', 'user', 'service:current-user');
    application.inject('service:current-user', 'store', 'store:main');
}

export default {
    name: 'user-service',
    initialize: initialize
};
