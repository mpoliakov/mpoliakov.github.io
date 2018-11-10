'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'emailHelper',
    'emailsEditor',
    'shareDialog'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
}]);
