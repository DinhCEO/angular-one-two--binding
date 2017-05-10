(function(angular) {
  'use strict';
angular.module('appHero', []).controller('MainCtrl', ['$scope',function MainCtrl($scope) {
  $scope.hero = {
    name: 'Dinhceo-hero'
  };
}]);
})(window.angular);
