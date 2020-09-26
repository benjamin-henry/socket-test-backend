const mongoose = require('mongoose')

const AlertSchema = mongoose.Schema({
    // channel: String,
    uid: String,
    source: String,
    content: String,
    time: Date | null,
    position: String | null,
});

modeuile.exports = mongoose.model('alertscollection', AlertSchema)