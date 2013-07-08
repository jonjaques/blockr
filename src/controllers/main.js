define(['app', './base'], function(app, BaseController) {

  var MainController = BaseController.extend({

    init: function(scope, state, rootScope, logger, authenticator) {
      this._super(scope, state);

      if (authenticator.isAuthenticated()) {
        this.$state.transitionTo('dashboard.home');
      } else {
        this.$state.transitionTo('login');
      }
    }

  });

  MainController.$inject = [
    '$scope',
    '$state',
    '$rootScope',
    'blockr.logger',
    'blockr.services.client'
  ];

  return app.controller('blockr.MainController', MainController);

});
