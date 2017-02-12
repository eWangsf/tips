

module.exports = function (app) {

    var core = require('../controllers/core.js'),
        home = require('../controllers/home.js'),
        plane = require('../controllers/plane.js'),
        operation = require('../controllers/operation.js'),
        train = require('../controllers/train.js');


    // home
    app.route('/api/statistics').get(home.getStatics);
    app.route('/api/carousels').post(home.getCarousel);
    app.route('/api/comments').post(home.getComments);

    // plane
    app.route('/api/plane/planes').post(plane.getPlanes);
    app.route('/api/plane/add').post(plane.addPlanes);

    // operation
    app.route('/api/operation/type').post(operation.getByType);
    app.route('/api/operation/detail').post(operation.getById);

    // train
    app.route('/api/train/trainoftype').post(train.getByType);



    app.route('/admin').get(core.renderAdmin);
    app.route('/*').get(core.renderIndex);
    

}








