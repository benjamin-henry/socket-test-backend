const mongoose = require('mongoose');
const ChannelSchema = mongoose.Schema({
    name: String,
    source_id: String,
    time: Date | null,
});

module.exports = mongoose.model('channelscollection', ChannelSchema)