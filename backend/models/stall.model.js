const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Stall = new Schema({
    name: String,
    canteen: String,
    image: String,
});

module.exports = mongoose.model('Stall', Stall);
