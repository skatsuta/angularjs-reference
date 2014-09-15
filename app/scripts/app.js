(function() { "use strict";

var MyController = function($scope) {
  $scope.message = 'Hello, World!';
  $scope.action = function() {
    $scope.message = 'Goodbye, Everyone!';
  };
};

var appModule = angular.module('app', ['ngSanitize']);

appModule.controller('myController', MyController);

appModule.controller('CountCtrl', ['$scope', function ($scope) {
  var maxCount = 140;
  $scope.count = maxCount;
  $scope.change = function() {
    $scope.count = maxCount - $scope.tweet.length;
    if ($scope.count < 0) {
      $scope.count = Math.abs($scope.count);
      $scope.isOver = true;
    } else {
      $scope.isOver = false;
    }
  };
}]);

})();
