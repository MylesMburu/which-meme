import mongoose from 'mongoose';

const MemeSchema = new mongoose.Schema({
    tag:{
        type: String,
        required: true,
    },
    phrase:{
        type: String,
        required: true,
    },
    s3Url:{
        type: String,
        required: true,
    },
    thumbnail: {
        type: Buffer,
        required: true, 
    },
    date:{
        type: Date,
        default: Date.now,
    },

});

const MemeModel = mongoose.models.Meme || mongoose.model('Meme', MemeSchema);