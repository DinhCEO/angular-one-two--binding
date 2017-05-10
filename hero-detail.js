(function(angular) {
  'use strict';
	function HeroDetailController($scope) {
		
	}

	HeroDetailController.$inject=['$scope'];

	angular.module('appHero').component('heroDetail', {
		templateUrl: 'hero.html',
		controller: HeroDetailController,
		controllerAs: 'heroDetailCtr',
		bindings: {
		herodetail: '<'
		}
	});
})(window.angular);
