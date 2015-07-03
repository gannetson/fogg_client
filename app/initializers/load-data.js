export function initialize(container, application) {
  application.deferReadiness();
  var store = container.lookup('store:main');
  store.find('country').then(function(countries){
    application.advanceReadiness();
  });
}

export default {
  name: 'load-data',
  after: 'store',
  initialize: initialize
};
