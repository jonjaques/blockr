define(['class'], function(Class) {

  var Controller = Class.extend({

    $scope: null,

    $state: null,

    init: function($scope, $state) {
      this.$scope = $scope;
      this.$state = $state;
      this.hydrate.call(this);
    },

    hydrate: function() {}

  });

  Controller.$inject = ['$scope', '$state'];

  return Controller;

})
