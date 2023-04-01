import express from 'express';
import UsersController from '../Controllers/Users';
import IsValidLogin from '../Middlewares/IsValidLogin';

const UsersRoutes = express.Router();
const usersController = new UsersController();
const isValidLogin = new IsValidLogin()

UsersRoutes.post(
  '/login',
  isValidLogin.vEmail,
  isValidLogin.vPassword,
  usersController.login
);
UsersRoutes.post(
  '/register',
  isValidLogin.vName,
  isValidLogin.vEmail,
  isValidLogin.vPassword,
  usersController.register
);

export default UsersRoutes;
