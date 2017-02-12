'use strict';

angular.module('core')
    .factory('dataManager', [
        '$http', '$rootScope', '$window', 'utility',

        function($http, $rootScope, $window, utility) {
            
            var logMe = function(callback, desc) {
                desc = desc || 'API';
                return function(resp) {
                    if (!resp.status || resp.status != 200) console.log(desc + ' call failed: ' +
                        err);
                    else console.log(desc + ' call succeed.');
                    if (callback) callback(resp.data);
                };
            };
            var handleResponse = function(httpRequest, callback) {
                httpRequest
                    .then(function(resp) {
                        if (callback) {
                            if (resp.status !== 200) callback(resp.statusText);
                            else if (resp.data.error) callback(resp.data.msg);
                            else callback(resp);
                        }
                    })
                    .catch(function(err) {
                        if (callback) callback(err);
                    });
            };

            // index 
            var getStatics = function (callback) {
                handleResponse(
                    utility.httpe.get('/api/statistics'),
                    logMe(callback, 'getStatics'));
            }

            var getCarousels = function (callback) {
                handleResponse(
                    utility.httpe.post('/api/carousels'),
                    logMe(callback, 'getCarousels'));
            }
            var getComments = function (callback) {
                handleResponse(
                    utility.httpe.post('/api/comments'),
                    logMe(callback, 'getComments'));
            }

            // plane
            var getPlanes = function (para, callback) {
                handleResponse(
                    utility.httpe.post('/api/plane/planes', para),
                    logMe(callback, 'getPlanes'));
            }
            var addPlanes = function (data, callback) {
                handleResponse(utility.httpe.post('/api/plane/add', data),
                    logMe(callback, 'addPlanes'));
            }

            // operation
            var getOperationByType = function (type, callback) {
                handleResponse(
                    utility.httpe.post('/api/operation/type', type),
                    logMe(callback, 'getOperationByType'))
            }
            var getPlaceById = function (id, callback) {
                handleResponse(
                    utility.httpe.post('/api/operation/detail', id),
                    logMe(callback, 'getPlaceById'));
            }

            // train
            var getTrainsByType = function(para, callback) {
                handleResponse(
                    utility.httpe.post('/api/train/trainoftype', para),
                    logMe(callback, 'getTrainsByType'));
            }



            var test = function () {

            }
          


            // Public API
            return {
                // home
                'getStatics': getStatics,
                'getCarousels': getCarousels,
                'getComments': getComments,
                // planes
                'getPlanes': getPlanes,
                'addPlanes': addPlanes,
                // operations
                'getOperationByType': getOperationByType,
                'getPlaceById': getPlaceById,
                // train
                'getTrainsByType': getTrainsByType,
                // 'getTrajectoryHeatmap': getTrajectoryHeatmap,
                // 'getRoadHeatmap': getRoadHeatmap,
                // 'calcReachAndOts': calcReachAndOts,
                // 'calcMdsDistanceMatrix': calcMdsDistanceMatrix,
                // 'getPOIDistribution': getPOIDistribution,
                'test': test
            };
        }
    ]);
