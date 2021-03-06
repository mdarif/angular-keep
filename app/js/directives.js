define(['angular', 'services'], function(angular, services) {
	'use strict';

	/* Directives */
	alert("got the directive");

	angular.module('myApp.directives', ['myApp.services'])

	//blur directive
	.directive('myBlur', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attr) {
				element.bind('blur', function() {
					//apply scope (attributes)
					scope.$apply(attr.myBlur);
					//return scope value for focusing to false
					scope.$eval(attr.myFocus + '=false');
				});
			}
		};
	})

	//focus directive
	.directive('myFocus', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attr) {
				scope.$watch(attr.myFocus, function(n, o) {
					if (n !== 0 && n) {
						element[0].focus();
					}
				});
			}
		};
	});

});