import mongoose from 'mongoose';
const ChannelSchema = mongoose.Schema({
    name: String,
    source_id: String,
    time: Date | null,
});

export default mongoose.model('channelscollection', ChannelSchema)