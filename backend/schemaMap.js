import mongoose from 'mongoose';

const schemaMap = new mongoose.Schema({
    zoom: {type: Number, required: true},
    center: {
        coordCenter1: {type: Number, required: true},
        coordCenter2: {type: Number, required: true}
    },
    coordinates: [
        {
            coord1: {type: Number, required: true},
            coord2: {type: Number, required: true}
        }
    ],
    name: String,
    date: {type: Date, required: true},
    current: {type: Boolean, required: true}
});

export default mongoose.model('schemaMap', schemaMap, 'maps');
