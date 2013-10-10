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

    it('should have all fields cleared after clearFields', function() {
        var empty = '';
        $scope.name = 'BILLY BOOT';
        $scope.country = 'Australia';
        $scope.grapes = 'Chardonnay';
        $scope.region = '-';
        $scope.note = 'Fresh, tropical fruit flavours and aromas, this Chardonnay is soft and round with a bright finish.';
        $scope.clearFields();
        expect($scope.name).toBe(empty);
        expect($scope.country).toBe(empty);
        expect($scope.grapes).toBe(empty);
        expect($scope.region).toBe(empty);
        expect($scope.note).toBe(empty);
    });
});

