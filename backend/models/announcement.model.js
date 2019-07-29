const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Announcement = new Schema({
    title: String,
    text: String
});

module.exports = mongoose.model('Announcement', Announcement);
