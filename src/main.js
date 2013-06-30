requirejs.config({
	paths: {
		jquery: 'vendor/jquery/jquery',
		angular: 'vendor/angular/angular',
		underscore: 'vendor/underscore',
		'class': 'vendor/class'
	},
	shim: {
		jquery: {
			exports: 'jQuery'
		},
		underscore: {
			exports: '_'
		},
		angular: {
			exports: 'angular'
		},
		'class': {
			exports: 'Class'
		}
	}
});

require([
	'angular'
	, 'app'
], function(angular, Blockr) {

    angular.bootstrap(document, ['blockr']);

});