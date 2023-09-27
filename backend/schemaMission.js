import mongoose from 'mongoose';

const schemaMission = new mongoose.Schema({
    name: String,
    idMap: {type: mongoose.Schema.Types.ObjectId, required: true},
    location: {
        coord1: {type: Number, required: true},
        coord2: {type: Number, required: true}
    },
    date: {type: Date, required: true},
});

export default mongoose.model('schemaMission', schemaMission, 'missions');
