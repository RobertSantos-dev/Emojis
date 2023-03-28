import express from 'express';
import UsersController from '../Controllers/Users';

const UsersRoutes = express.Router();
const usersController = new UsersController();

UsersRoutes.get('/', usersController.getEmail);

export default UsersRoutes;
