'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var testSchema = new Schema({
    id: Number,
    name: String,
    age: Number
});

var CarouselSchema = new Schema({
    imageurl: String,
    name: String,
    link: String,
    active: String
});

var CommentsSchema = new Schema({
    avatar: String,
    name: String,
    job: String,
    content: String
});

var planeSchema = new Schema({
    imageurl: String,
    title: String,
    type: Array,
    membernum: Number
});

var operationPlaceSchema = new Schema({
    imageurl: String,
    title: String,
    tele: String,
    addr: String,
    intro: String,
    video: String,
    type: String
});
var trainSchema = new Schema({
    imageurl: String,
    title: String,
    tele: String,
    addr: String,
    type: String
});
var staticsSchema = new Schema({
    planeNum: Number,
    planeImgUrl: String,
    operationNum: Number,
    operationImgUrl: String,
    trainNum: Number,
    trainImgUrl: String
});

(function () {
    var schemaList = {
        "testSchema": testSchema,
        "Carousels": CarouselSchema,
        "Comments": CommentsSchema,
        'plane': planeSchema,
        'operationplaces': operationPlaceSchema,
        'statistic': staticsSchema,
        'trains': trainSchema
    };
    for (var schema in schemaList) {
        exports[schema] = mongoose.model(schema, schemaList[schema]);
    }

    console.log('Database scheme registered.');

}());







