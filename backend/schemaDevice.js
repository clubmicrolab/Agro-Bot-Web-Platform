import mongoose from 'mongoose';

const schemaDevice = new mongoose.Schema({
    name: String,
    num: {type: Number, required: true}
});

export default mongoose.model('schemaDevice', schemaDevice, 'devices');
