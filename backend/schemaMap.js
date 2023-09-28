import mongoose from 'mongoose';

const schemaMap = new mongoose.Schema({
    zoom: {type: Number, required: true},
    center: {
        coordCenter1: {type: Number, required: true},
        coordCenter2: {type: Number, required: true}
    },
    coordinates: [
        {
            position: {
                lat: {type: Number, required: true},
                lng: {type: Number, required: true}
            },
            number: {type: Number, required: true}
        }
    ],
    name: String,
    date: {type: Date, required: true},
    current: {type: Boolean, required: true}
});

export default mongoose.model('schemaMap', schemaMap, 'maps');
