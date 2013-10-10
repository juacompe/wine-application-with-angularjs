function CreateController($scope, WinesService) {
    $scope.name = '';
    $scope.country = '';
    $scope.grapes = '';
    $scope.region = '';
    $scope.note = '';
    
    $scope.successMessage = '';
    $scope.errorMessage = '';

    $scope.saveButtonPressed = function() {
        var wine = new WinesService(); 
        wine.name = $scope.name;
        wine.country = $scope.country;
        wine.grapes = $scope.grapes;
        wine.region = $scope.region;
        wine.note = $scope.note;
        wine.$save(function() {
            $scope.successMessage = 'Wine is saved with id ' + wine.id;
            $scope.clearFields();
        });
    };

    $scope.clearFields = function() {
        $scope.name = '';
        $scope.country= '';
        $scope.grapes = '';
        $scope.region = '';
        $scope.note = '';
    }
}
