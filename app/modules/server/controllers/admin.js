
var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    config = require("../../../config/config"),
    models = require("../models/model"),
    q = require('q');

exports.getHomeData = function (req, res) {
    var data = {};
    var _carousel = models.Carousels,
        _comment = models.Comments,
        _companyInfo = models.companyInfos;
    var promise1 = _carousel
        .find()
        .exec();
    var promise2 = _comment
        .find()
        .exec();
    var promise3 = _companyInfo
        .find()
        .exec();
    var promise4 = models.plane
        .find()
        .exec();
    var promise5 = models.operationplaces
        .find()
        .exec();
    var promise6 = models.trains
        .find()
        .exec();
    q.all([promise1, promise2, promise3, promise4, promise5, promise6])
        .then(function (dbdata) {
            data.carousels = dbdata[0];
            data.comments = dbdata[1]; 
            data.companyinfo = dbdata[2][0]; 
            data.planes = dbdata[3]; 
            data.places = dbdata[4]; 
            data.trains = dbdata[5]; 
            res.json(data);           
        }); 
}

exports.editCarousel = function (req, res) {
    var obj = req.body.data,
        action = req.body.action;
    var _carousel = models.Carousels;
    switch(action) {
        case "modify": {
            _carousel
                .update({_id: obj._id}, {$set: {
                    imageurl: obj.imageurl,
                    name: obj.name,
                    active: obj.active
                }})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                }); 
            break;
        }
        case "delete": {
            _carousel
                .remove({_id: obj._id})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                });
            break; 
        }
    }
      
}

exports.editComment = function (req, res) {
    var obj = req.body.data,
        action = req.body.action;
    var _comment = models.Comments;
    switch(action) {
        case "add": {
            var _item = new _comment(obj);
            _item.save()
                .then(function (data) {
                    handleDB(req, res, data);
                    console.log('save comment data: ---', data);
                })
                .catch(function (err) {
                    console.log('save comment data err: ---', err);
                });
            break;
        }
        case "modify": {
            _comment
                .update({_id: obj._id}, {$set: {
                    avatar: obj.avatar,
                    name: obj.name,
                    job: obj.job,
                    content: obj.content
                }})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                }); 
            break;
        }
        case "delete": {
            _comment
                .remove({_id: obj._id})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                });
            break; 
        }
    }
}

exports.editPlane = function (req, res) {
    var obj = req.body.data,
        action = req.body.action;
    var _plane = models.plane;
    switch(action) {
        case "add": {
            var _item = new _plane(obj);
            _item.save()
                .then(function (data) {
                    res.json(data);
                    console.log('save plane data: ---', data);
                })
                .catch(function (err) {
                    console.log('save plane data err: ---', err);
                });
            break;
        }
        case "modify": {
            _plane
                .update({_id: obj._id}, {$set: {
                    imageurl: obj.imageurl,
                    title: obj.title,
                    membernum: obj.membernum, 
                    intro: obj.intro,
                    video: obj.video,
                    type: obj.type,
                    pre: obj.pre
                }})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                }); 
            break;
        }
        case "delete": {
            _plane
                .remove({_id: obj._id})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                });
            break; 
        }
    }  
}

exports.editPlace = function (req, res) {
    var obj = req.body.data,
        action = req.body.action;
    var _model = models.operationplaces;
    switch(action) {
        case "add": {
            var _item = new _model(obj);
            _item.save()
                .then(function (data) {
                    res.json(data);
                    console.log('save operation data: ---', data);
                })
                .catch(function (err) {
                    console.log('save operation data err: ---', err);
                });
            break;
        }
        case "modify": {
            _model
                .update({_id: obj._id}, {$set: {
                    imageurl: obj.imageurl,
                    title: obj.title,
                    addr: obj.addr,
                    tele: obj.tele,
                    intro: obj.intro,
                    video: obj.video
                }})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                }); 
            break;
        }
        case "delete": {
            _model
                .remove({_id: obj._id})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                });
            break; 
        }
    }  
}
exports.editTrain = function (req, res) {
    var obj = req.body.data,
        action = req.body.action;
    var _model = models.trains;
    switch(action) {
        case "add": {
            var _item = new _model(obj);
            _item.save()
                .then(function (data) {
                    res.json(data);
                    console.log('save train data: ---', data);
                })
                .catch(function (err) {
                    console.log('save train data err: ---', err);
                });
            break;
        }
        case "modify": {
            _model
                .update({_id: obj._id}, {$set: {
                    imageurl: obj.imageurl,
                    title: obj.title,
                    addr: obj.addr,
                    tele: obj.tele,
                    intro: obj.intro,
                    video: obj.video
                }})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                }); 
            break;
        }
        case "delete": {
            _model
                .remove({_id: obj._id})
                .exec(function (_err, _result) {
                    handleDB(req, res, _err, _result);
                });
            break; 
        }
    }  
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





