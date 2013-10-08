describe('WineController', function() {
    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('WineController', {
            $scope: $scope,
        });
    }));

    it('should have 3 items after initialized', function() {
        expect($scope.wines.length).toEqual(3);

        describe('first wine', function() {
            it('should be LILLY BOOT, 2012', function() {
                var firstWine = $scope.wines[0];
                expect(firstWine.name).toEqual('LILLY BOOT');
                expect(firstWine.year).toEqual(2012);
            });
        });

        describe('second wine', function() {
            it('should be LILLY BOOT, 2012', function() {
                var secondWine = $scope.wines[1];
                expect(secondWine.name).toEqual('ROOKS');
                expect(secondWine.year).toEqual(2012);
            });
        });

        describe('third wine', function() {
            it('should be LILLY BOOT, 2012', function() {
                var thirdWine = $scope.wines[2];
                expect(thirdWine.name).toEqual('HESKETH');
                expect(thirdWine.year).toEqual(2009);
            });
        });

    });

});


