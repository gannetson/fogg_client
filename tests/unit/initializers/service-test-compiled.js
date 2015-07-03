'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _initializersService = require('../../../initializers/service');

var _qunit = require('qunit');

var container, application;

(0, _qunit.module)('Unit | Initializer | service', {
  beforeEach: function beforeEach() {
    _ember2['default'].run(function () {
      application = _ember2['default'].Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
(0, _qunit.test)('it works', function (assert) {
  (0, _initializersService.initialize)(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

//# sourceMappingURL=service-test-compiled.js.map