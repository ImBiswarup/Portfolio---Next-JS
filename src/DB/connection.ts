import mongoose from 'mongoose';

const connectToDB = async (url: any) => {
    if (mongoose.connections[0].readyState) return;

    mongoose.connect(url);

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err);
    });
};

export default connectToDB;
