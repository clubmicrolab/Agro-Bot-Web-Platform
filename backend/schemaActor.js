import mongoose from 'mongoose';

const schemaActor = new mongoose.Schema({
    name: {type: String, required: true},
    sensors: {type: [mongoose.Schema.Types.ObjectId], required: true},
    location: {
        coord1: {type: Number, required: true},
        coord2: {type: Number, required: true}
    },
    speed: {type: Number, required: true},
    direction : {type: String, required: true},
    degrees: {type: Number, required: true}
});

export default mongoose.model('schemaActor', schemaActor, 'actors');

