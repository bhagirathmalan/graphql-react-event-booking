const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regSchema = new Schema({

    fullname: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
  
});

module.exports = mongoose.model('Registration', regSchema);