import Router from 'express';
import PostController from "./PostController.js";

const router = new Router();

//maps
router.post('/maps', PostController.createMap);
router.get('/maps', PostController.getAllMaps);
router.get('/maps/:id', PostController.getMap);
router.put('/maps', PostController.updateMap);
router.delete('/maps/:id', PostController.deleteMap);

//user
router.post('/user', PostController.createUser);
router.get('/user', PostController.getAllUsers);
router.get('/user/:id', PostController.getUser);
router.put('/user', PostController.updateUser);
router.delete('/user/:id', PostController.deleteUser);

//sensors (is this a path to device?)
router.post('/sensors', PostController.createSensor);
router.get('/sensors', PostController.getAllSensors);
router.get('/sensors/:id', PostController.getSensor);
router.put('/sensors', PostController.updateSensor);
router.delete('/sensors/:id', PostController.deleteSensor);

//bot
router.post('/bot', PostController.createBot);
router.get('/bot/:id', PostController.getBot);
router.put('/bot', PostController.updateBot);
router.delete('/bot/:id', PostController.deleteBot);

//crops
router.post('/crops', PostController.createCrop);
router.get('/crops', PostController.getAllCrops);
router.get('/crops/:id', PostController.getCrop);
router.put('/crops', PostController.updateCrop);
router.delete('/crops/:id', PostController.deleteCrop);

//missions
router.post('/missions', PostController.createMission);
router.get('/missions', PostController.getAllMissions);
router.get('/missions/:id', PostController.getMission);
router.put('/missions', PostController.updateMission);
router.delete('/missions/:id', PostController.deleteMission);

export default router;