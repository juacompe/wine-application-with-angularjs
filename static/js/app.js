wineApp = angular.module('WineApplication', []);
wineApp.config(function($routeProvider) {
    $routeProvider.
    when('/wines', {
        controller: WineController,
        templateUrl: 'list.html',
    }).
    otherwise({ redirectTo: '/wines' });
});


