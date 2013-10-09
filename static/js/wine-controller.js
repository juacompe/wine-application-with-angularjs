function WineController($scope) {
    $scope.wines = [
        {id: 1, name: 'LILLY BOOT', year: 2012},
        {id: 2, name: 'ROOKS', year: 2012},
        {id: 3, name: 'HESKETH', year: 2009},
    ]; 

    $scope.deleteById = function(wineId) {
        $scope.wines = _.reject($scope.wines, function(wine){
            return wine.id == wineId;
        });
    };

    $scope.deleteButtonPressed = function(wineId) {
        var confirm = $('#myModal').modal('show');
        console.log(confirm);
        if(confirm) {
            $scope.deleteById(wineId);
        }
    };
}

