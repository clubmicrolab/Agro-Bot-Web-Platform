import mongoose from 'mongoose';

const schemaJobsHistory = new mongoose.Schema({
    idJob: {type: mongoose.Schema.Types.ObjectId, required: true},
    idMission: {type: mongoose.Schema.Types.ObjectId, required: true}
});

export default mongoose.model('schemaJobsHistory', schemaJobsHistory, 'jobsHistory');
