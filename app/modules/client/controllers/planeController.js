'use strict';

angular.module('core').controller('PlaneController', ['$scope', '$rootScope', 'dataManager',

function ($scope, $rootScope, dataManager) {
    $scope.planes = [];

    $scope.type = 1;
    
    

    $scope.planeFilter = function (filter) {
        var arr = [filter];
        if(filter >= 3) {
            arr = [1, 2];
        }
        dataManager.getPlanes({type: arr}, function (data) {
            $scope.type = arr;
            $scope.planes = data;
        })

    }
    $scope.planeFilter($scope.type);



    // var obj = {
    //     imageurl: "images/1.png",
    //     title: 'test_title4',
    //     type: [1],
    //     membernum: 2004
    // };
    // dataManager.addPlanes(obj, function (data) {
    //     $scope.push(obj);
    //     $scope.update();
    // })

}

]);


