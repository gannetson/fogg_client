export function initialize(container, application){
    window.ENV = application.ENV;
}

export default {
  name:       'auth',
  //before:     'django-rest-auth',
  initialize: initialize
};
