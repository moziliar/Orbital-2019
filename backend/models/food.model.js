const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Food = new Schema({
    name: String,
    price: String,
    description: String,
    stall: String,
    image: String,
    location: String
});

module.exports = mongoose.model('Food', Food);
