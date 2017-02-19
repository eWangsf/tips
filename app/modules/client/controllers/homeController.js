'use strict';

angular.module('core').controller('HomeController', [ '$scope', '$rootScope', 'dataManager', 

function ($scope, $rootScope, dataManager) {


    dataManager.getStatics(function (data) {
        $rootScope.statics = data;
    });
    var a = 20;
    console.log(a.toString(2));
    
}

]);
