describe('CreateController', function() {
    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('CreateController', {
            $scope: $scope,
            WinesService: null, 
        });
    }));

    it('should have all fields empty by default', function() {
        expect($scope.name).toEqual('');
        expect($scope.country).toEqual('');
        expect($scope.grapes).toEqual('');
        expect($scope.region).toEqual('');
        expect($scope.note).toEqual('');
    });

    it('should have success message as empty by default', function() {
        expect($scope.successMessage).toEqual('');
    });

    it('should have error message as empty by default', function() {
        expect($scope.errorMessage).toEqual('');
    });
});

