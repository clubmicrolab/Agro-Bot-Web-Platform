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