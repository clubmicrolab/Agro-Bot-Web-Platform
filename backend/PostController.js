import PostService from "./PostService.js";

class PostController {
    //MAPS
    async createMap(req, res) {
        try {
            const map = await PostService.createMap(req.body);
            res.json(map);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllMaps(req, res) {
        try {
            const maps = await PostService.getAllMaps();
            return res.json(maps);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getMap(req, res) {
        try {
            const map = await PostService.getMap(req.params.id);
            return res.json(map);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateMap(req, res) {
        try {
            const updatedMap = await PostService.updateMap(req.body);
            return res.json(updatedMap);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteMap(req, res) {
        try {
            const map = await PostService.deleteMap(req.params.id);
            return res.json(map);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //USER
    async createUser(req, res) {
        try {
            const user = await PostService.createUser(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await PostService.getAllUsers();
            return res.json(users);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getUser(req, res) {
        try {
            const user = await PostService.getUser(req.params.id);
            return res.json(user);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await PostService.updateUser(req.body);
            return res.json(updatedUser);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await PostService.deleteUser(req.params.id);
            return res.json(user);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //DEVICE
    async createDevice(req, res) {
        try {
            const device = await PostService.createDevice(req.body);
            res.json(device);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllDevices(req, res) {
        try {
            const devices = await PostService.getAllDevices();
            return res.json(devices);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getDevice(req, res) {
        try {
            const device = await PostService.getDevice(req.params.id);
            return res.json(device);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateDevice(req, res) {
        try {
            const updatedDevice = await PostService.updateDevice(req.body);
            return res.json(updatedDevice);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteDevice(req, res) {
        try {
            const device = await PostService.deleteDevice(req.params.id);
            return res.json(device);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //DEVICE & SENSOR
    async createPair(req, res) {
        try {
            const pair = await PostService.createPair(req.body);
            res.json(pair);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllPairs(req, res) {
        try {
            const pairs = await PostService.getAllPairs();
            return res.json(pairs);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllSensorsByDeviceId(req, res) {
        try {
            const sensors = await PostService.getAllSensorsByDeviceId(req.params.id);
            return res.json(sensors);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getPair(req, res) {
        try {
            const pair = await PostService.getPair(req.params.id);
            return res.json(pair);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updatePair(req, res) {
        try {
            const pair = await PostService.updatePair(req.body);
            return res.json(pair);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deletePair(req, res) {
        try {
            const pair = await PostService.deletePair(req.params.id);
            return res.json(pair);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //ACTIVE JOB
    async createActiveJob(req, res) {
        try {
            const job = await PostService.createActiveJob(req.body);
            res.json(job);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllActiveJobs(req, res) {
        try {
            const jobs = await PostService.getAllActiveJobs();
            return res.json(jobs);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getActiveJob(req, res) {
        try {
            const job = await PostService.getActiveJob(req.params.id);
            return res.json(job);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateActiveJob(req, res) {
        try {
            const job = await PostService.updateActiveJob(req.body);
            return res.json(job);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteActiveJob(req, res) {
        try {
            const job = await PostService.deleteActiveJob(req.params.id);
            return res.json(job);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //JOBS HISTORY
    async createJob(req, res) {
        try {
            const job = await PostService.createJob(req.body);
            res.json(job);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllJobs(req, res) {
        try {
            const jobs = await PostService.getAllJobs();
            return res.json(jobs);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getJob(req, res) {
        try {
            const job = await PostService.getJob(req.params.id);
            return res.json(job);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateJob(req, res) {
        try {
            const job = await PostService.updateJob(req.body);
            return res.json(job);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteJob(req, res) {
        try {
            const job = await PostService.deleteJob(req.params.id);
            return res.json(job);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //CROPS
    async createCrop(req, res) {
        try {
            const crop = await PostService.createCrop(req.body);
            res.json(crop);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllCrops(req, res) {
        try {
            const crops = await PostService.getAllCrops();
            return res.json(crops);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getCrop(req, res) {
        try {
            const crop = await PostService.getCrop(req.params.id);
            return res.json(crop);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateCrop(req, res) {
        try {
            const updatedCrop = await PostService.updateCrop(req.body);
            return res.json(updatedCrop);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteCrop(req, res) {
        try {
            const crop = await PostService.deleteCrop(req.params.id);
            return res.json(crop);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //ACTORS
    async createActor(req, res) {
        try {
            const actor = await PostService.createActor(req.body);
            res.json(actor);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllActors(req, res) {
        try {
            const actors = await PostService.getAllActors();
            return res.json(actors);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getActor(req, res) {
        try {
            const actor = await PostService.getActor(req.params.id);
            return res.json(actor);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateActor(req, res) {
        try {
            const updatedActor = await PostService.updateActor(req.body);
            return res.json(updatedActor);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteActor(req, res) {
        try {
            const actor = await PostService.deleteActor(req.params.id);
            return res.json(actor);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //SENSORS
    async createSensor(req, res) {
        try {
            const sensor = await PostService.createSensor(req.body);
            res.json(sensor);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllSensors(req, res) {
        try {
            const sensors = await PostService.getAllSensors();
            return res.json(sensors);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getSensor(req, res) {
        try {
            const sensor = await PostService.getSensor(req.params.id);
            return res.json(sensor);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateSensor(req, res) {
        try {
            const updatedSensor = await PostService.updateSensor(req.body);
            return res.json(updatedSensor);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteSensor(req, res) {
        try {
            const sensor = await PostService.deleteSensor(req.params.id);
            return res.json(sensor);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //MISSIONS
    async createMission(req, res) {
        try {
            const mission = await PostService.createMission(req.body);
            res.json(mission);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllMissions(req, res) {
        try {
            const missions = await PostService.getAllMissions();
            return res.json(missions);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getMission(req, res) {
        try {
            const mission = await PostService.getMission(req.params.id);
            return res.json(mission);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateMission(req, res) {
        try {
            const updatedMission = await PostService.updateMission(req.body);
            return res.json(updatedMission);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteMission(req, res) {
        try {
            const mission = await PostService.deleteMission(req.params.id);
            return res.json(mission);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    //TELEMETRY
    async createTelemetry(req, res) {
        try {
            const telemetry = await PostService.createTelemetry(req.body);
            res.json(telemetry);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getAllTelemetries(req, res) {
        try {
            const telemetries = await PostService.getAllTelemetries();
            return res.json(telemetries);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getTelemetry(req, res) {
        try {
            const telemetry = await PostService.getTelemetry(req.params.id);
            return res.json(telemetry);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteTelemetry(req, res) {
        try {
            const telemetry = await PostService.deleteTelemetry(req.params.id);
            return res.json(telemetry);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

export default new PostController();