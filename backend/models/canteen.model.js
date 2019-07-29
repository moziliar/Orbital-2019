const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Canteen = new Schema({
    name: String,
    faculty: String,
    image: String,
    location: String
});

module.exports = mongoose.model('Canteen', Canteen);
