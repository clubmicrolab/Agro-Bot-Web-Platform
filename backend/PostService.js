import schemaMap from "./schemaMap.js";
import schemaCrop from "./schemaCrop.js";
import schemaActor from "./schemaActor.js";
import schemaSensor from "./schemaSensor.js";
import schemaMission from "./schemaMission.js";
import schemaTelemetry from "./schemaTelemetry.js";
import schemaUser from "./schemaUser.js";
import schemaDevice from "./schemaDevice.js";
import schemaActiveJob from "./schemaActiveJob.js";
import schemaJobsHistory from "./schemaJobsHistory.js";
import schemaDeviceAndSensor from "./schemaDeviceAndSensor.js";

class PostService {
    //MAPS
    async createMap(map) {
        return schemaMap.create(map);
    }

    async getAllMaps() {
        return schemaMap.find();
    }

    async getMap(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaMap.findById(id);
    }

    async updateMap(map) {
        if (!map._id) {
            throw new Error('Id is not right.');
        }
        return schemaMap.findByIdAndUpdate(map._id, map, {new: true});
    }

    async deleteMap(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaMap.findByIdAndDelete(id);
    }

    //USER
    async createUser(user) {
        return schemaUser.create(user);
    }

    async getAllUsers() {
        return schemaUser.find();
    }

    async getUser(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaUser.findById(id);
    }

    async updateUser(user) {
        if (!user._id) {
            throw new Error('Id is not right.');
        }
        return schemaUser.findByIdAndUpdate(user._id, user, {new: true});
    }

    async deleteUser(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaUser.findByIdAndDelete(id);
    }

    //DEVICE
    async createDevice(device) {
        return schemaDevice.create(device);
    }

    async getAllDevices() {
        return schemaDevice.find();
    }

    async getDevice(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaDevice.findById(id);
    }

    async updateDevice(device) {
        if (!device._id) {
            throw new Error('Id is not right.');
        }
        return schemaDevice.findByIdAndUpdate(device._id, device, {new: true});
    }

    async deleteDevice(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaDevice.findByIdAndDelete(id);
    }

    //DEVICE & SENSOR
    async createPair(device) {
        return schemaDeviceAndSensor.create(device);
    }

    async getAllPairs() {
        return schemaDeviceAndSensor.find();
    }

    async getAllSensorsByDeviceId(id) {
        return schemaDeviceAndSensor.findById(id);
    }

    async getPair(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaDeviceAndSensor.findById(id);
    }

    async updatePair(pair) {
        if (!pair._id) {
            throw new Error('Id is not right.');
        }
        return schemaDeviceAndSensor.findByIdAndUpdate(pair._id, pair, {new: true});
    }

    async deletePair(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaDeviceAndSensor.findByIdAndDelete(id);
    }

    //ACTIVE JOB
    async createActiveJob(job) {
        return schemaActiveJob.create(job);
    }

    async getAllActiveJobs() {
        return schemaActiveJob.find();
    }

    async getActiveJob(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaActiveJob.findById(id);
    }

    async updateActiveJob(job) {
        if (!job._id) {
            throw new Error('Id is not right.');
        }
        return schemaActiveJob.findByIdAndUpdate(job._id, job, {new: true});
    }

    async deleteActiveJob(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaActiveJob.findByIdAndDelete(id);
    }

    //JOSB HISTORY
    async createJob(job) {
        return schemaJobsHistory.create(job);
    }

    async getAllJobs() {
        return schemaJobsHistory.find();
    }

    async getJob(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaJobsHistory.findById(id);
    }

    async updateJob(job) {
        if (!job._id) {
            throw new Error('Id is not right.');
        }
        return schemaJobsHistory.findByIdAndUpdate(job._id, job, {new: true});
    }

    async deleteJob(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaJobsHistory.findByIdAndDelete(id);
    }

    //CROPS
    async createCrop(crop) {
        return schemaCrop.create(crop);
    }

    async getAllCrops() {
        return schemaCrop.find();
    }

    async getCrop(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaCrop.findById(id);
    }

    async updateCrop(crop) {
        if (!crop._id) {
            throw new Error('Id is not right.');
        }
        return schemaCrop.findByIdAndUpdate(crop._id, crop, {new: true});
    }

    async deleteCrop(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaCrop.findByIdAndDelete(id);
    }

    //ACTORS
    async createActor(actor) {
        return schemaActor.create(actor);
    }

    async getAllActors() {
        return schemaActor.find();
    }

    async getActor(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaActor.findById(id);
    }

    async updateActor(user) {
        if (!user._id) {
            throw new Error('Id is not right.');
        }
        return schemaActor.findByIdAndUpdate(user._id, user, {new: true});
    }

    async deleteActor(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaActor.findByIdAndDelete(id);
    }

    //SENSORS
    async createSensor(sensor) {
        return schemaSensor.create(sensor);
    }

    async getAllSensors() {
        return schemaSensor.find();
    }

    async getSensor(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaSensor.findById(id);
    }

    async updateSensor(sensor) {
        if (!sensor._id) {
            throw new Error('Id is not right.');
        }
        return schemaSensor.findByIdAndUpdate(sensor._id, sensor, {new: true});
    }

    async deleteSensor(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaSensor.findByIdAndDelete(id);
    }

    //MISSIONS
    async createMission(mission) {
        return schemaMission.create(mission);
    }

    async getAllMissions() {
        return schemaMission.find();
    }

    async getMission(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaMission.findById(id);
    }

    async updateMission(mission) {
        if (!mission._id) {
            throw new Error('Id is not right.');
        }
        return schemaMission.findByIdAndUpdate(mission._id, mission, {new: true});
    }

    async deleteMission(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaMission.findByIdAndDelete(id);
    }

    //TELEMETRY
    async createTelemetry(telemetry) {
        return schemaTelemetry.create(telemetry);
    }

    async getAllTelemetries() {
        return schemaTelemetry.find();
    }

    async getTelemetry(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaTelemetry.findById(id);
    }

    async deleteTelemetry(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        return schemaTelemetry.findByIdAndDelete(id);
    }
}

export default new PostService();