define(['controllers/base', 'app'], function(Controller, app) {

  var BaseController = Controller.extend({

  });

  BaseController.$inject = ['$scope', '$state'];

  return app.controller('blockr.areas.dashboard.controllers.base',
                          BaseController);

})
