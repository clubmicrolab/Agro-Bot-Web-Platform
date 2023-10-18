import mongoose from 'mongoose';

const schemaDeviceAndSensor = new mongoose.Schema({
    idDevice: {type: mongoose.Schema.Types.ObjectId, required: true},
    idSensor: {type: mongoose.Schema.Types.ObjectId, required: true}
});

export default mongoose.model('schemaDeviceAndSensor', schemaDeviceAndSensor, 'd&s');
