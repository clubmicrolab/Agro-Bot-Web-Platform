import mongoose from 'mongoose';

const schemaActiveJob = new mongoose.Schema({
    idMission: {type: mongoose.Schema.Types.ObjectId, required: true}
});

export default mongoose.model('schemaActiveJob', schemaActiveJob, 'activeJob');
