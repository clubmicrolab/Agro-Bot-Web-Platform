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

    //BOT
    async createBot(req, res) {
        try {
            const bot = await PostService.createBot(req.body);
            res.json(bot);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async getBot(req, res) {
        try {
            const bot = await PostService.getBot(req.params.id);
            return res.json(bot);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async updateBot(req, res) {
        try {
            const updatedBot = await PostService.updateBot(req.body);
            return res.json(updatedBot);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteBot(req, res) {
        try {
            const bot = await PostService.deleteBot(req.params.id);
            return res.json(bot);
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

    //USERS
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
}

export default new PostController();