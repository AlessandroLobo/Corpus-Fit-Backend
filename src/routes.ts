import { Router } from 'express';
import { CreateUsersController } from './modules/users/useCases/createUsers/CreateUsersController';
import { AuthenticateUsersController } from './modules/account/authenticateUser/AuthenticateUserController';
import { FindUsersTokenController } from './modules/users/useCases/findUsersToken/FindUsersTokenController';
import { ListPlansController } from './modules/plans/listPlans/ListPlansController';
import { GetAllUsersController } from './modules/users/useCases/getAllUsers/GetAllUsersController';
import { FindUserController } from './modules/users/useCases/findUser/FindUserController';

const routes = Router();

const createUsersController = new CreateUsersController();
const authenticateUsersController = new AuthenticateUsersController();
const findUsersController = new FindUserController();
const findUsersTokenController = new FindUsersTokenController();
const listPlansController = new ListPlansController();
const getAllUsersController = new GetAllUsersController();

routes.post('/authenticate/', authenticateUsersController.handle);

routes.post('/users/', createUsersController.handle);

routes.get('/users/find', findUsersTokenController.handle);

// Adicione um parâmetro :id na rota findUser para receber o ID do usuário
routes.get('/users/findUser/:id', findUsersController.handle);

routes.get('/plans/listPlans', listPlansController.handle);

routes.get('/users/listStudents', getAllUsersController.handle);

export { routes };
