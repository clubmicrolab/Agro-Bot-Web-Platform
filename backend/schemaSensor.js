import mongoose from 'mongoose';

const schemaSensor = new mongoose.Schema({
    type: {type: String, required: true},
    idBot: {type: mongoose.Schema.Types.ObjectId, required: true},
    sensorReading: {type: String, required: true}, //what will be in point 'sensorReading'
    timeStamp: {type: Date, required: true}
});

export default mongoose.model('schemaSensor', schemaSensor, 'sensors');

