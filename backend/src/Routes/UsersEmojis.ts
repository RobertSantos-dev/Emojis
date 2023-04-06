import express from 'express';
import UsersEmojisController from '../Controllers/UsersEmojis';
import IsValidToken from '../Middlewares/IsValidToken';

const UsersEmojisRoutes = express.Router();
const usersEmojisController = new UsersEmojisController();
const isValidToken = new IsValidToken();


/* GET */
UsersEmojisRoutes.get(
  '/user/:userId',
  isValidToken.vToken,
  usersEmojisController.getUserId
);

UsersEmojisRoutes.get(
  '/emoji/:emojiId',
  isValidToken.vToken,
  usersEmojisController.getEmojiId,
);

UsersEmojisRoutes.get(
  '/:id',
  isValidToken.vToken,
  usersEmojisController.getId
);


/* POST */
UsersEmojisRoutes.post(
  '/',
  isValidToken.vToken,
  usersEmojisController.postCreate,
);


/* DELETE */
UsersEmojisRoutes.delete(
  '/',
  isValidToken.vToken,
  usersEmojisController.deleteDetroy
)

export default UsersEmojisRoutes;