define(['controllers/base', 'app'], function(Controller, app) {

  var LoginController = Controller.extend({

    init: function() {
      this._super.apply(this, arguments);
      console.log('login init');
    }

  });

  LoginController.$inject = Controller.$inject;

  return app.controller('blockr.areas.wall.controllers.login', LoginController);

})
