import mongoose from 'mongoose';

const schemaMission = new mongoose.Schema({
    name: String,
    idDevice: {type: mongoose.Schema.Types.ObjectId, required: true},
    idMap: {type: mongoose.Schema.Types.ObjectId, required: true},
    idUser: {type: mongoose.Schema.Types.ObjectId, required: true},
    startDate: {type: Date, required: true},
    TTL: {type: Number, required: true}
});

export default mongoose.model('schemaMission', schemaMission, 'missions');
