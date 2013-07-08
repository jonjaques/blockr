define(['app', './base', 'underscore'], function(app, Service, _) {

  var LoggerService = Service.extend({

    init: function($log) {
      this.$log = $log;

      _.map(this._logTypes, function(type) {
        LoggerService.prototype[type] = function() {
          var args = _.toArray(arguments);
          this._log.call(this, type, args);
        }
      }, this);
    },

    _logTypes: ['log', 'info', 'warn', 'error', 'omgbbq'],

    _log: function(type, args) {
      if (_(this._logTypes).contains(type) && type !== 'omgbbq') {
        return this.$log[type].apply(this.$log, args);
      } else if (type === 'omgbbq') {
        return this.$log.error.apply(this.$log, args);
      } else {
        throw "Logger: Incorrect usage. Use 'log', 'info', 'warn', or 'error'.";
      }
    }

  });

  LoggerService.$inject = ['$log'];

  return app.service('blockr.logger', LoggerService);

})
