function EditController($scope, $routeParams, WinesService) {
    $scope.init = function() {
        var id, wine;
        id = $routeParams.id;
        wine = WinesService.get({ id: id }, $scope.load)
    }

    $scope.load = function(wine) {
        $scope.name = wine.name;
        $scope.year = wine.year;
        $scope.country = wine.country;
        $scope.grapes = wine.grapes;
        $scope.region = wine.region;
        $scope.note = wine.note;
    }

}

