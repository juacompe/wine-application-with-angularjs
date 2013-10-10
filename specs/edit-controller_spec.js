describe('EditController', function() {
    var $scope;
    var wine = {
        name: 'Hello!',
        country: 'Australia',
        grapes: 'Just testing',
        region: 'Victoria',
        note: 'Note',
    };

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('EditController', {
            $scope: $scope,
            WinesService: null, 
        });
    }));

    it('should have all fields equal to the given wine when loaded', function() {
        $scope.load(wine);
        expect($scope.name).toEqual(wine.name);
        expect($scope.country).toEqual(wine.country);
        expect($scope.grapes).toEqual(wine.grapes);
        expect($scope.region).toEqual(wine.region);
        expect($scope.note).toEqual(wine.note);
    });
});
