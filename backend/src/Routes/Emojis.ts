import express from 'express';
import EmojisController from '../Controllers/Emojis';

const EmojisRoutes = express.Router();
const emojisController = new EmojisController();

EmojisRoutes.get('/', emojisController.getAll);
EmojisRoutes.get('/:id', emojisController.getId);
EmojisRoutes.post('/code', emojisController.postCode);

export default EmojisRoutes;