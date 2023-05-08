import { Router } from 'express';
import { AuthenticateUsersController } from './modules/account/authenticateUser/AuthenticateUserController';
import { FindUsersTokenController } from './modules/users/useCases/findUsersToken/FindUsersTokenController';

import { CreateUsersController } from './modules/users/useCases/createUsers/CreateUsersController';
import { UpdateUsersController } from './modules/users/useCases/UpdateUsers/UpdateUsersController';
import { GetAllUsersController } from './modules/users/useCases/getAllUsers/GetAllUsersController';
import { FindUserController } from './modules/users/useCases/findUser/FindUserController';
import { DeleteUsersController } from './modules/users/useCases/DeleteUsers/DeleteUsersController';

import { CreatePlansController } from './modules/plans/createPlans/CreatePlansController';
import { FindPlanController } from './modules/plans/findPlan/FindPlanController';
import { ListPlansController } from './modules/plans/listPlans/ListPlansController';
import { UpdatePlansController } from './modules/plans/UpdatePlans/UpdatePlansController';
import { DeletePlansController } from './modules/plans/deletePlans/DeleteUsersController';

const routes = Router();

const authenticateUsersController = new AuthenticateUsersController();
const findUsersTokenController = new FindUsersTokenController();

const createUsersController = new CreateUsersController();
const updateUsersController = new UpdateUsersController();
const deleteUsersController = new DeleteUsersController();
const findUsersController = new FindUserController();
const getAllUsersController = new GetAllUsersController();

const findPlansController = new FindPlanController();
const listPlansController = new ListPlansController();
const createPlansController = new CreatePlansController();
const updatePlansController = new UpdatePlansController();
const deletePlansController = new DeletePlansController();

routes.post('/authenticate/', authenticateUsersController.handle);

routes.post('/users/', createUsersController.handle);

routes.put('/users/update', updateUsersController.handle);

routes.delete('/users/delete/:id', deleteUsersController.handle);

routes.get('/users/find', findUsersTokenController.handle);

routes.get('/users/listStudents', getAllUsersController.handle);

routes.get('/users/findUser/:id', findUsersController.handle);

routes.get('/plans/listPlans', listPlansController.handle);

routes.post('/plans/createPlans', createPlansController.handle);

routes.get('/plans/findPlan', findPlansController.handle);

routes.put('/plans/update', updatePlansController.handle);

routes.delete('/plans/delete/:id', deletePlansController.handle);

export { routes };
