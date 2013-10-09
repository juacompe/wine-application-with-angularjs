function WineController($scope, WinesService) {
    $scope.winery = {
        wines: []
    };

    $scope.initWines = function() {
        $scope.winery = WinesService.get();
    };

    $scope.deleteById = function(wineId) {
        var wine, wines;
        wines = $scope.winery.wines;
        wine = _.findWhere(wines, { id: wineId });
        wineIndex = _.indexOf(wines, wine);
        wines.splice(wineIndex, 1);
    };

    $scope.deleteButtonPressed = function(wineId) {
        var config, message, buttons;
        message = '<div id="alert" class="alert alert-danger"><h4>แน่จริงมึงลบสิ แสรดดด</h4><p>ลบแล้วมันจะหายไปชั่วฟ้าดินสลาย ใครก็ช่วยมุงไม่ได้</p></div>';
        buttons = {
            danger: {
                label: 'ลบแม่ม!',
                className: 'btn btn-danger',
                callback: function() {
                    $scope.deleteById(wineId); 
                    $scope.$apply();
                },
            },
            cancel: {
                label: 'ล้อเล่นแสรด',
                className: 'btn btn-default',
            },
        };
        config = {
            message: message,
            buttons: buttons,
            closeButton: false,
        };
        bootbox.dialog(config);
    };
}

