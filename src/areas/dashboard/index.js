define(['app', './controllers/base', './controllers/home'], function(app) {

  return app.config(['$stateProvider', function(router) {

      var section = 'blockr.areas.dashboard.';

      router

        .state('index', {
          url: '/',
          template: 'index'
        })

        .state('dashboard', {
          url: '/dashboard',
          template: '<ui-view ng-animate="{enter: \'animated wobble\'}"></ui-view>',
          controller: section + 'controllers.base'
        })

        .state('dashboard.home', {
          url: '/home',
          templateUrl: 'areas/dashboard/views/home.html',
          controller: section + 'controllers.home'
        })

        .state('dashboard.account', {
          url: '/account',
          templateUrl: 'areas/dashboard/views/account.html',
          controller: section + 'controllers.home'
        });

    }]);

});
