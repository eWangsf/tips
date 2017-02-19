
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    config = require("../../../config/config"),
    models = require("../models/model");

exports.getOpPlaces = function (req, res) {
    // var _opModel = models.operationplaces
}

exports.getByType = function (req, res) {
    var _operationModel = models.operationplaces;

    _operationModel
        .find({type: req.body.type})
        .exec(function (_err, _result) {
            handleDB(req, res, _err, _result);
        });
}

exports.getById = function (req, res) {
    var _operationModel = models.operationplaces;

    _operationModel
        .find({_id: req.body.id})
        .exec(function (_err, _result) {
            handleDB(req, res, _err, _result);
        });
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





