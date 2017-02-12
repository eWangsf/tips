'use strict';

angular.module('core')
.controller('CommentsController', ['$http', '$scope', '$rootScope', 'utility', 'dataManager',

function ($http, $scope, $rootScope, utility, dataManager) {
    
    $scope.comments = [];
    dataManager.getComments(function (data) {
        // data = data.slice(0, 3);
        console.log('getComments - commentsController.js');
        $scope.comments = data;
    });
    $scope.style = {
        "left": "0"
    };
    $scope.cindex = 1;

    $scope.toggleComment = function (index) {
        $scope.style = {
            "left": (-100 * index) + "vw"
        };
        $scope.cindex = index;
    }

    
}

]);
