import mongoose from 'mongoose';

const schemaUser = new mongoose.Schema({
    name: String
});

export default mongoose.model('schemaUser', schemaUser, 'users');
