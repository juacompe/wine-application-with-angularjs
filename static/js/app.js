wineApp = angular.module('WineApplication', ['ngResource']);
wineApp.config(function($routeProvider) {
    $routeProvider.
    when('/wines', {
        controller: WineController,
        templateUrl: 'list.html',
    }).
    otherwise({ redirectTo: '/wines' });
});
wineApp.factory('WinesService', WinesService);

