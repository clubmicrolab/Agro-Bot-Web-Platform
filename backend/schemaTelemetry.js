import mongoose from 'mongoose';

const schemaTelemetry = new mongoose.Schema({
    idSensor: {type: mongoose.Schema.Types.ObjectId, required: true},
    value: {type: [Number], required: true},
    timeStamp: {type: Date, required: true},
    TTL: {type: Number, required: true} //moved in schemaSensor
});

export default mongoose.model('schemaTelemetry', schemaTelemetry, 'telemetry');

