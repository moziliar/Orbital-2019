const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let News = new Schema({
    newsTitle: String,
    newsText: String
});

module.exports = mongoose.model('News', News);
