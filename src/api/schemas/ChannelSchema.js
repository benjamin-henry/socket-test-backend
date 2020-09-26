const mongoose = require('mongoose');
const ChannelSchema = mongoose.Schema({
    name: String,
    source_id: String,
    time: Date | null,
});

modeule.exports = mongoose.model('channelscollection', ChannelSchema)