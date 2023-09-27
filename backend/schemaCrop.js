import mongoose from 'mongoose';

const schemaCrop = new mongoose.Schema({
    name: {type: String, required: true},
    variety: {type: String, required: true},
    plantingData: {type: String, required: true},
    expectedHarvestDate: {type: Date, required: true},
    locationName: {type: String, required: true},
    location: {
        coord1: {type: Number, required: true},
        coord2: {type: Number, required: true}
    },
    agronomistInCharge: {type: mongoose.Schema.Types.ObjectId, required: true}
});

export default mongoose.model('schemaCrop', schemaCrop, 'crops');

