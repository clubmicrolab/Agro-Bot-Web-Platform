import mongoose from 'mongoose';

const schemaSensor = new mongoose.Schema({
    name: {type: String, required: true},
    rez: {type: [String], required: true},
    minMax: {type: [Number], required: true},
    TTL: {type: Number, required: true} //seconds
});

export default mongoose.model('schemaSensor', schemaSensor, 'sensors');

