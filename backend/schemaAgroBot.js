import mongoose from 'mongoose';

const schemaBot = new mongoose.Schema({
    name: String,
    location: {
        coord1: {type: Number, required: true},
        coord2: {type: Number, required: true}
    },
    speed: {type: Number, required: true},
    direction : {type: String, required: true},
    degrees: {type: Number, required: true}
});

export default mongoose.model('schemaBot', schemaBot, 'bot');

