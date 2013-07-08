define(['app', './loginController'], function(app) {

  return app
    .config(['$stateProvider', function(router) {

      router.state('login', {
        url: '/login',
        templateUrl: 'areas/wall/login.html',
        controller: 'blockr.areas.wall.controllers.login'
      });

    }]);

})
