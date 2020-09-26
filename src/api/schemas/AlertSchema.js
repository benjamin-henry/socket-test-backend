import mongoose from 'mongoose'

const AlertSchema = mongoose.Schema({
    // channel: String,
    uid: String,
    source: String,
    content: String,
    time: Date | null,
    position: String | null,
});

export default mongoose.model('alertscollection', AlertSchema)