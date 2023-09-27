import mongoose from 'mongoose';

const schemaUser = new mongoose.Schema({
    name: {type: String, required: true}
});

export default mongoose.model('schemaUser', schemaUser, 'users');

