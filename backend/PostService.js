import schemaMap from "./schemaMap.js";
import schemaCrop from "./schemaCrop.js";
import schemaActor from "./schemaActor.js";
import schemaSensor from "./schemaSensor.js";
import schemaMission from "./schemaMission.js";
import schemaTelemetry from "./schemaTelemetry.js";

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