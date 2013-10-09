function WineController($scope) {
    $scope.wines = [
        {id: 1, name: 'LILLY BOOT', year: 2012},
        {id: 2, name: 'ROOKS', year: 2012},
        {id: 3, name: 'HESKETH', year: 2009},
    ]; 

    $scope.deleteById = function(wineId) {
        var wine;
        wine = _.findWhere($scope.wines, { id: wineId });
        wineIndex = _.indexOf($scope.wines, wine);
        $scope.wines.splice(wineIndex, 1);
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
        };
        bootbox.dialog(config);
    };
}

