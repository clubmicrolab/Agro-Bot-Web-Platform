import schemaMap from "./schemaMap.js";
import schemaBot from "./schemaAgroBot.js";
import schemaCrop from "./schemaCrop.js";
import schemaUser from "./schemaUser.js";
import schemaSensor from "./schemaSensor.js";
import schemaMission from "./schemaMission.js";

class PostService {
    //MAPS
    async createMap(map) {
        const createdMap = await schemaMap.create(map);
        return createdMap;
    }

    async getAllMaps() {
        const maps = await schemaMap.find();
        return maps;
    }

    async getMap(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const map = await schemaMap.findById(id);
        return map;
    }

    async updateMap(map) {
        if (!map._id) {
            throw new Error('Id is not right.');
        }
        const updatedMap = await schemaMap.findByIdAndUpdate(map._id, map, {new: true});
        return updatedMap;
    }

    async deleteMap(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const map = await schemaMap.findByIdAndDelete(id);
        return map;
    }

    //BOT
    async createBot(post) {
        const createdBot = await schemaBot.create(post);
        return createdBot;
    }

    async getBot(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const bot = await schemaBot.findById(id);
        return bot;
    }

    async updateBot(post) {
        if (!post._id) {
            throw new Error('Id is not right.');
        }
        const updatedBot = await schemaBot.findByIdAndUpdate(post._id, post, {new: true});
        return updatedBot;
    }

    async deleteBot(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const bot = await schemaBot.findByIdAndDelete(id);
        return bot;
    }

    //CROPS
    async createCrop(crop) {
        const createdCrop = await schemaCrop.create(crop);
        return createdCrop;
    }

    async getAllCrops() {
        const crops = await schemaCrop.find();
        return crops;
    }

    async getCrop(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const crop = await schemaCrop.findById(id);
        return crop;
    }

    async updateCrop(crop) {
        if (!crop._id) {
            throw new Error('Id is not right.');
        }
        const updatedCrop = await schemaCrop.findByIdAndUpdate(crop._id, crop, {new: true});
        return updatedCrop;
    }

    async deleteCrop(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const crop = await schemaCrop.findByIdAndDelete(id);
        return crop;
    }

    //USERS
    async createUser(user) {
        const createdUser = await schemaUser.create(user);
        return createdUser;
    }

    async getAllUsers() {
        const users = await schemaUser.find();
        return users;
    }

    async getUser(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const user = await schemaUser.findById(id);
        return user;
    }

    async updateUser(user) {
        if (!user._id) {
            throw new Error('Id is not right.');
        }
        const updatedUser = await schemaUser.findByIdAndUpdate(user._id, user, {new: true});
        return updatedUser;
    }

    async deleteUser(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const user = await schemaUser.findByIdAndDelete(id);
        return user;
    }

    //SENSORS
    async createSensor(crop) {
        const createdSensor = await schemaSensor.create(crop);
        return createdSensor;
    }

    async getAllSensors() {
        const sensors = await schemaSensor.find();
        return sensors;
    }

    async getSensor(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const sensor = await schemaSensor.findById(id);
        return sensor;
    }

    async updateSensor(sensor) {
        if (!sensor._id) {
            throw new Error('Id is not right.');
        }
        const updatedSensor = await schemaSensor.findByIdAndUpdate(sensor._id, sensor, {new: true});
        return updatedSensor;
    }

    async deleteSensor(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const sensor = await schemaSensor.findByIdAndDelete(id);
        return sensor;
    }

    //MISSIONS
    async createMission(mission) {
        const createdMission = await schemaMission.create(mission);
        return createdMission;
    }

    async getAllMissions() {
        const missions = await schemaMission.find();
        return missions;
    }

    async getMission(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const mission = await schemaMission.findById(id);
        return mission;
    }

    async updateMission(mission) {
        if (!mission._id) {
            throw new Error('Id is not right.');
        }
        const updatedMission = await schemaMission.findByIdAndUpdate(mission._id, mission, {new: true});
        return updatedMission;
    }

    async deleteMission(id) {
        if (!id) {
            throw new Error('Id is not right.');
        }
        const mission = await schemaMission.findByIdAndDelete(id);
        return mission;
    }
}

export default new PostService();