(function() {
  'use strict';

  var core = angular.module('app.core');

  var config = {
    name: 'Angular dashboard demo',
    appTitle: 'Angular dashboard demo',
    version: '0.0.1'
  };

  core.value('config', config);
})();