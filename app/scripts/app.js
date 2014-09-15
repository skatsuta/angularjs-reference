(function() { 'use strict';

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

appModule.controller('SubmitCtrl', ['$scope', function ($scope) {
  $scope.submit = function() {
    $scope.message = (!$scope.check2219) ? 'Please check' : '';
  };
}]);

appModule.controller('EventCtrl', ['$scope', function ($scope) {
  $scope.click = function($event) {
    console.log($event);
  };
}]);

appModule.controller('CurrencyCtrl', ['$scope', function ($scope) {
  $scope.dollar = 10000000;
}]);

appModule.controller('FilterCtrl', ['$scope', function ($scope) {
  $scope.myList = [
    {name: 'ヨセミテ'},
    {name: 'marvericks'},
    {name: 'mountain lion'},
    {name: 'lion'},
  ];

  $scope.twitterinfo = [
    {twitterid: 'yosemite', following: 100, followers: 10},
    {twitterid: 'marvericks', following: 200, followers: 20},
    {twitterid: 'mountain lion', following: 300, followers: 30},
  ];

  $scope.today = new Date();
}]);

appModule.controller('scope1', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $scope.test = 'test1';
  $rootScope.rootTest = 'rootTest1';
}]);

appModule.controller('scope2', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $scope.test = 'test2';
  $rootScope.rootTest = 'rootTest2';
}]);

})();
