define(['controllers/base', 'app'], function(Controller, app) {

  var HomeController = Controller.extend({

    init: function($scope, $state, client) {
      var self = this;
      this.client = client;
      this._super($scope, $state);
    },

    hydrate: function() {
      var self = this;
      this.$scope.thing = 'test';
      this.$scope.user = this.client.currentUser;
      this.$scope.toggle = function() {
        self.toggle();
      };
    },

    toggle: function() {
      this.client.toggleAuth();
    }

  });

  HomeController.$inject = ['$scope', '$state', 'blockr.services.client'];

  return app.controller('blockr.areas.dashboard.controllers.home',
                          HomeController);

});
