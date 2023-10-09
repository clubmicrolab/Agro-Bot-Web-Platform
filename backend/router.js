import Router from 'express';
import PostController from "./PostController.js";

const router = new Router();

//maps
router.post('/maps', PostController.createMap);
router.get('/maps', PostController.getAllMaps);
router.get('/maps/:id', PostController.getMap);
router.put('/maps', PostController.updateMap);
router.delete('/maps/:id', PostController.deleteMap);

//actor
router.post('/actor', PostController.createActor);
router.get('/actor', PostController.getAllActors);
// router.get('/user', async (req, res) => {
//     try {
//         const users = await PostController.getAllUsers(req, res);
//         console.log(users);
//         res.status(200).json(users);
//     }  catch (err) {
//         //console.error('Ошибка:', err);
//         res.status(500).json({err: 'Произошла ошибка'});
//     }
// });
router.get('/actor/:id', PostController.getActor);
router.put('/actor', PostController.updateActor);
router.delete('/actor/:id', PostController.deleteActor);

//sensors
router.post('/sensors', PostController.createSensor);
router.get('/sensors', PostController.getAllSensors);
router.get('/sensors/:id', PostController.getSensor);
router.put('/sensors', PostController.updateSensor);
router.delete('/sensors/:id', PostController.deleteSensor);

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

//telemetry
router.post('/telemetry', PostController.createTelemetry);
router.get('/telemetry', PostController.getAllTelemetries);
router.get('/telemetry/:id', PostController.getTelemetry);
router.delete('/telemetry/:id', PostController.deleteTelemetry);

export default router;