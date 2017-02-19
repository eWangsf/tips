
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    config = require("../../../config/config"),
    models = require("../models/model");


exports.getPlanes = function (req, res) {
    var _planeModel = models.plane;
    if(req.body.type == 4) {
        _planeModel
            .find()
            .exec(function (_err, _result) {
                handleDB(req, res, _err, _result);
            });
        return ;
    }
    _planeModel
        .find({type: req.body.type})
        .exec(function (_err, _result) {
            handleDB(req, res, _err, _result);
        });
}
exports.addPlanes = function(req, res) {
    var _planeModel = models.plane;
    _planeModel.create(req.body);
}

function handleDB(req, res, _err, _result) {
    var result = checkDataBase(_err, _result);
    res.json(result);
}


function checkDataBase(_err, _result) {
    if (_err) {
        return { 
            error: true, 
            msg: _err.toString()
        };
    }
    return _result;
}