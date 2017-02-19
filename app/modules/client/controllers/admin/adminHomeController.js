'use strict';

angular.module('core')
.controller('adminHomeController', [ '$scope', '$rootScope', 'dataManager',

function ($scope, $rootScope, dataManager) {

    dataManager.getHomeData(function (data) {
        $scope.data = data;
    });

    $scope.modCarouselBtn = function (carousel) {
        $scope.now_carousel = carousel;
        $('#carouselModel').modal();
    }
    $scope.modCarouselSubmit = function () {
        var obj = $scope.now_carousel;
        obj.imageurl = $('#carouselModel #imageurl').val();
        obj.name = $('#carouselModel #name').val();

        dataManager.editCarousel(obj, "modify", function (data) {
            $('#carouselModel').modal('hide');
        });
    }
    $scope.delCarouselBtn = function (carousel) {
        dataManager.editCarousel(carousel, "delete", function (data) {
            $('#carouselModel').modal('hide');
        });
    }

    $scope.addCommentBtn = function () {
        $('#commentModel_add').modal('show');
    }
    $scope.addCommentSubmit = function () {
        var obj = {};
        obj.avatar = $('#commentModel_add #avatar').val();
        obj.name = $('#commentModel_add #name').val();
        obj.job = $('#commentModel_add #job').val();
        obj.content = $('#commentModel_add #content').val();

        dataManager.editComment(obj, "add", function (data) {
            $('#commentModel_add').modal('hide');
        })
    }
    $scope.modCommentBtn = function (comment) {
        $scope.now_comment = comment;
        $('#commentModel').modal();
    }
    $scope.modCommentSubmit = function () {
        var obj = $scope.now_comment;
        obj.avatar = $('#commentModel #avatar').val();
        obj.name = $('#commentModel #name').val();
        obj.job = $('#commentModel #job').val();
        obj.content = $('#commentModel #content').val();

        dataManager.editComment(obj, "modify", function (data) {
            $('#commentModel').modal('hide');
        });
    }
    $scope.delCommentBtn = function (comment) {
        dataManager.editComment(comment, "delete", function (data) {
            window.location.reload();
        });
    }

    $scope.addPlane = function () {
        $('#planeModel_add').modal('show');
    }
    $scope.addPlaneSubmit = function () {
        var obj = {
            imageurl: $('#planeModel_add #imageurl').val(),
            title: $('#planeModel_add #title').val(),
            membernum: $('#planeModel_add #membernum').val(),
            intro: $('#planeModel_add #intro').val(),
            video: $('#planeModel_add #video').val(),
            type: $('#planeModel_add #type').val()
        };
        obj.pre = [{
            "label": "活动策划",
            "url": "/plane"
        }, {
            "label": $('#planeModel_add #type option:selected').text(),
            "url": "/plane?type=" + obj.type
        }];
        dataManager.editPlane(obj, "add", function (data) {
            window.location.reload();
        })
    }
    $scope.modPlaneBtn = function (plane) {
        $scope.now_plane = plane;
        $('#planeModel').modal();
    }
    $scope.modCommentSubmit = function () {
        var obj = $scope.now_plane;
        obj.imageurl = $('#planeModel #imageurl').val();
        obj.title = $('#planeModel #title').val();
        obj.membernum = $('#planeModel #membernum').val();
        obj.intro = $('#planeModel #intro').val();
        obj.video = $('#planeModel #video').val();
        obj.type = $('#planeModel #type').val();
        obj.pre = [{
            "label": "活动策划",
            "url": "/plane"
        }, {
            "label": $('#planeModel #type option:selected').text(),
            "url": "/plane?type=" + obj.type
        }];
        if(obj.type == "3") {
            obj.type = [1, 2];
        }
        dataManager.editPlane(obj, "modify", function (data) {
            window.location.reload();
        });
    }
    $scope.delPlaneBtn = function (plane) {
        dataManager.editPlane(plane, "delete", function (data) {
            window.location.reload();
        });
    }

    $scope.addPlace = function () {
        $('#placeModel_add').modal('show');
    }
    $scope.addPlaceSubmit = function () {
        var obj = {
            imageurl: $('#placeModel_add #imageurl').val(),
            title: $('#placeModel_add #title').val(),
            addr: $('#placeModel_add #addr').val(),
            tele: $('#placeModel_add #tele').val(),
            intro: $('#placeModel_add #intro').val(),
            video: $('#placeModel_add #video').val(),
            type: $('#placeModel_add #type').val(),
            pre: [{
                url: "/operation", 
                label: "场馆运营"
            }, {
                url: "/operation/place?type=" + $('#placeModel_add #type').val(), 
                label: $('#placeModel_add #type option:selected').text()
            }]
        };
        dataManager.editPlace(obj, "add", function (data) {
            window.location.reload();
        });
    }
    $scope.modPlaceBtn = function (place) {
        $scope.now_place = place;
        $('#placeModel').modal();
    }
    $scope.modPlaceSubmit = function () {
        var obj = $scope.now_place;
        obj.imageurl = $('#placeModel #imageurl').val();
        obj.title = $('#placeModel #title').val();
        obj.addr = $('#placeModel #addr').val();
        obj.tele = $('#placeModel #tele').val();
        obj.intro = $('#placeModel #intro').val();
        obj.video = $('#placeModel #video').val();
        dataManager.editPlace(obj, "modify", function (data) {
            window.location.reload();
        });
    }
    $scope.delPlaceBtn = function (place) {
        dataManager.editPlace(place, "delete", function (data) {
            window.location.reload();
        });
    }

    $scope.addTrain = function () {
        $('#trainModel_add').modal('show'); 
    }
    $scope.addTrainSubmit = function () {
        var obj = {
            imageurl: $('#trainModel_add #imageurl').val(),
            title: $('#trainModel_add #title').val(),
            addr: $('#trainModel_add #addr').val(),
            tele: $('#trainModel_add #tele').val(),
            intro: $('#trainModel_add #intro').val(),
            video: $('#trainModel_add #video').val(),
            type: $('#trainModel_add #type').val(),
            pre: [{
                url: "/train", 
                label: "体育培训"
            }, {
                url: "/train/train?type=" + $('#trainModel_add #type').val(), 
                label: $('#trainModel_add #type option:selected').text()
            }]
        };
        dataManager.editTrain(obj, "add", function (data) {
            window.location.reload();
        });
    }
    $scope.modTrainBtn = function (train) {
        $scope.now_train = train;
        $('#trainModel').modal();
    }
    $scope.modTrainSubmit = function () {
        var obj = $scope.now_train;
        obj.imageurl = $('#trainModel #imageurl').val();
        obj.title = $('#trainModel #title').val();
        obj.addr = $('#trainModel #addr').val();
        obj.tele = $('#trainModel #tele').val();
        obj.intro = $('#trainModel #intro').val();
        obj.video = $('#trainModel #video').val();
        dataManager.editTrain(obj, "modify", function (data) {
            window.location.reload();
        });
    }
    $scope.delTrainBtn = function (train) {
        dataManager.editTrain(train, "delete", function (data) {
            window.location.reload();
        });
    }
    
    
}

]);
