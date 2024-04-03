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

const Meme = mongoose.models.Meme || mongoose.model('Meme', MemeSchema);

export default Meme;