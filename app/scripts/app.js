'use strict';

var MyController = function($scope) {
  $scope.message = 'Hello, World!';
  $scope.action = function() {
    $scope.message = 'Goodbye, Everyone!';
  };
};
var appModule = angular.module('app', ['ngSanitize']);
appModule.controller('myController', MyController);
