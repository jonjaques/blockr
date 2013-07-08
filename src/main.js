requirejs.config({
  paths: {
    'jquery'            : 'vendor/jquery/jquery'
    , 'underscore'      : 'vendor/underscore'
    , 'class'           : 'vendor/class'
    , 'angular'         : 'vendor/angular/angular'
      , 'ui.bootstrap'  : 'vendor/angular/angular-ui-bootstrap-tpl'
      , 'ui.router'     : 'vendor/angular/angular-ui-router'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
    , 'underscore': {
      exports: '_'
    }
    , 'class': {
      exports: 'Class'
    }
    , 'angular': {
      exports: 'angular'
    }
      , 'ui.bootstrap': {
        deps: ['angular']
       }
      , 'ui.router': {
        deps: ['angular']
      }
  }
});

require([
  'angular'
  , 'jquery'
  , 'app'
  , 'controllers/main'

  // SERVICES
  , 'services/logger'
  , 'services/client'

  // AREAS
  , 'areas/dashboard/index'
  , 'areas/wall/index'


], function(angular, $, Blockr) {

    var host = $('#applicationHost');

    host.find('.loading-block')
      .fadeOut(function() {
        $(this).remove();
        host.removeClass('loading');
        angular.bootstrap(host[0], ['blockr']);
      });

});
