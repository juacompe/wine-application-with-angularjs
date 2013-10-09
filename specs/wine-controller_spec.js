describe('WineController', function() {
    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('WineController', {
            $scope: $scope,
            WinesService: null, 
        });
        $scope.wines = [
            {id: 1, name: 'LILLY BOOT', year: 2012},
            {id: 2, name: 'ROOKS', year: 2012},
            {id: 3, name: 'HESKETH', year: 2009},
        ];
    }));

    it('should have 3 items after initialized', function() {
        expect($scope.wines.length).toEqual(3);
    });

    it('should have LILLY BOOT, 2012 as first wine', function() {
        var firstWine = $scope.wines[0];
        expect(firstWine.id).toEqual(1);
        expect(firstWine.name).toEqual('LILLY BOOT');
        expect(firstWine.year).toEqual(2012);
    });

    it('should have ROOKS, 2012 as second wine', function() {
        var secondWine = $scope.wines[1];
        expect(secondWine.id).toEqual(2);
        expect(secondWine.name).toEqual('ROOKS');
        expect(secondWine.year).toEqual(2012);
    });

    it('should have HESKETH, 2009 as third wine', function() {
        var thirdWine = $scope.wines[2];
        expect(thirdWine.id).toEqual(3);
        expect(thirdWine.name).toEqual('HESKETH');
        expect(thirdWine.year).toEqual(2009);
    });

    it('should have only 2 wines left after delete first wine', function() {
        var wineId = 1;
        $scope.deleteById(wineId);
        expect($scope.wines.length).toEqual(2);
    });
});


