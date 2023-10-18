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
router.get('/users', PostController.getAllUsers);
router.get('/user/:id', PostController.getUser);
router.put('/user', PostController.updateUser);
router.delete('/user/:id', PostController.deleteUser);

//device
router.post('/device', PostController.createDevice);
router.get('/devices', PostController.getAllDevices);
router.get('/device/:id', PostController.getDevice);
router.put('/device', PostController.updateDevice);
router.delete('/device/:id', PostController.deleteDevice);

//missions
router.post('/missions', PostController.createMission);
router.get('/missions', PostController.getAllMissions);
router.get('/missions/:id', PostController.getMission);
router.put('/missions', PostController.updateMission);
router.delete('/missions/:id', PostController.deleteMission);

//sensors
router.post('/sensors', PostController.createSensor);
router.get('/sensors', PostController.getAllSensors);
router.get('/sensors/:id', PostController.getSensor);
router.put('/sensors', PostController.updateSensor);
router.delete('/sensors/:id', PostController.deleteSensor);

//devices & sensors
router.post('/d&s', PostController.createPair);
router.get('/d&s', PostController.getAllPairs);
router.get('/d&s/:id', PostController.getAllSensorsByDeviceId);
router.get('/d&s/:id', PostController.getPair);
router.put('/d&s', PostController.updatePair);
router.delete('/d&s/:id', PostController.deletePair);

//activeJob
router.post('/activeJob', PostController.createActiveJob);
router.get('/activeJob', PostController.getAllActiveJobs);
router.get('/activeJob/:id', PostController.getActiveJob);
router.put('/activeJob', PostController.updateActiveJob);
router.delete('/activeJob/:id', PostController.deleteActiveJob);

//jobs history
router.post('/jobHistory', PostController.createJob);
router.get('/jobHistory', PostController.getAllJobs);
router.get('/jobHistory/:id', PostController.getJob);
router.put('/jobHistory', PostController.updateJob);
router.delete('/jobHistory/:id', PostController.deleteJob);

//telemetry
router.post('/telemetry', PostController.createTelemetry);
router.get('/telemetry', PostController.getAllTelemetries);
router.get('/telemetry/:id', PostController.getTelemetry);
router.delete('/telemetry/:id', PostController.deleteTelemetry);

//OTHER
//actor
router.post('/actor', PostController.createActor);
router.get('/actor', PostController.getAllActors);
router.get('/actor/:id', PostController.getActor);
router.put('/actor', PostController.updateActor);
router.delete('/actor/:id', PostController.deleteActor);

//crops
router.post('/crops', PostController.createCrop);
router.get('/crops', PostController.getAllCrops);
router.get('/crops/:id', PostController.getCrop);
router.put('/crops', PostController.updateCrop);
router.delete('/crops/:id', PostController.deleteCrop);


export default router;