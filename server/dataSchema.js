const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    // images: {
    //     type: String,
    //     required: true
    // },
    title: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', dataSchema, 'listing');
module.exports = User;