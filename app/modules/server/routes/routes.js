

module.exports = function (app) {

    var core = require('../controllers/core.js'),
        home = require('../controllers/home.js'),
        plane = require('../controllers/plane.js'),
        operation = require('../controllers/operation.js'),
        train = require('../controllers/train.js'),
        data = require('../controllers/data.js'),
        admin = require('../controllers/admin.js');

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

    app.route('/api/detail').post(data.getDetail);



    // admin
    app.route('/api/admin/home/data').post(admin.getHomeData);
    app.route('/api/admin/carousel/edit').post(admin.editCarousel);
    app.route('/api/admin/comment/edit').post(admin.editComment);
    app.route('/api/admin/plane/edit').post(admin.editPlane);
    app.route('/api/admin/place/edit').post(admin.editPlace);
    app.route('/api/admin/train/edit').post(admin.editTrain);



    app.route('/admin').get(core.renderAdmin);
    app.route('/*').get(core.renderIndex);
    

}








