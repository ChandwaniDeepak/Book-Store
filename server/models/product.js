'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');

let productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    addedTime: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    itemList: {
        style: {
            HardBind: Number,
            SoftCopy: Number,
             kindle: Number
        },
        color: [{
            url: String,
            name: String
        }],
        price: {
    HardBind: Number,
    SoftCopy: Number,
    kindle: Number
        }
    }
});

productSchema.plugin(mongooseUniqueValidator);

let ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
