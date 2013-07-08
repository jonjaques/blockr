define(['./base', 'app'], function(Service, app) {

  var ClientService = Service.extend({

    init: function(logger) {
      this.logger = logger;
      this.currentUser = {
        name: 'Jon',
        loggedIn: true
      };
      logger.info('Current User: ', this.currentUser);
    },

    isAuthenticated: function() {
      return !!this.currentUser.loggedIn;
    },

    toggleAuth: function() {
      return this.currentUser.loggedIn = !this.currentUser.loggedIn;
    }

  });

  ClientService.$inject = ['blockr.logger'];

  return app.service('blockr.services.client', ClientService);

});
