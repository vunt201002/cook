import { Router } from 'express';
import { createUserController, getUsersController } from '~/controllers/user.controller';

const usersRouter = Router();

usersRouter.get('/', getUsersController);

usersRouter.post('/', createUserController);

export default usersRouter;
