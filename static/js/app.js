wineApp = angular.module('WineApplication', ['ngResource']);
wineApp.config(function($routeProvider) {
    $routeProvider.
    when('/wines', {
        controller: WineController,
        templateUrl: 'list.html',
    }).
    when('/wine/new', {
        controller: WineController,
        templateUrl: 'detail.html',
    }).
    otherwise({ redirectTo: '/wines' });
});
wineApp.factory('WinesService', WinesService);

