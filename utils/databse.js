import mongoose from 'mongoose';

//connect to the mongodb database
export const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database: ', error);
    }
};