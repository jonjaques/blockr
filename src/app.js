define([
  'angular'
  , 'ui.bootstrap'
  , 'ui.router'
],

function(angular, ApplicationProvider) {

  var blockrDependencies = [
    'ui.bootstrap',
    'ui.state'
  ];

  var app = angular.module('blockr', blockrDependencies);

  return app;

});
