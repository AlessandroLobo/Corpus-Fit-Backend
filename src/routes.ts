import { Router } from 'express';
import { AuthenticateUsersController } from './modules/account/authenticateUser/AuthenticateUserController';
import { FindUsersTokenController } from './modules/users/useCases/findUsersToken/FindUsersTokenController';

import { CreateStudentsController } from './modules/users/useCases/createStudents/CreateStudentsController';
import { UpdateStudentsController } from './modules/users/useCases/UpdateUsers/UpdateStudentsController';
import { GetAllStudentsController } from './modules/users/useCases/getAllStudents/GetAllStudentsController';
import { FindStudentController } from './modules/users/useCases/findStudent/FindStudentController';
import { DeleteStudentsController } from './modules/users/useCases/DeleteStudents/DeleteStudentsController';

import { CreatePlansController } from './modules/plans/createPlans/CreatePlansController';
import { FindPlanController } from './modules/plans/findPlan/FindPlanController';
import { ListPlansController } from './modules/plans/listPlans/ListPlansController';
import { UpdatePlansController } from './modules/plans/UpdatePlans/UpdatePlansController';
import { DeletePlansController } from './modules/plans/deletePlans/DeleteUsersController';
import { CreateStudentPLanController } from './modules/installments/generateInstallments/CreateStudentPLanController';
import { FindStudentPlanController } from './modules/installments/findPlansGenerate/FindStudentPlanController';
import { FindUniqueStudentPlanController } from './modules/installments/findUniquePlansGenerate/FindUniqueStudentPlanController';

const routes = Router();

const authenticateUsersController = new AuthenticateUsersController();
const findUsersTokenController = new FindUsersTokenController();

const createStudentsController = new CreateStudentsController();
const updateStudentsController = new UpdateStudentsController();
const deleteStudentsController = new DeleteStudentsController();
const findStudentController = new FindStudentController();
const getAllStudentsController = new GetAllStudentsController();

const findPlansController = new FindPlanController();
const listPlansController = new ListPlansController();
const createPlansController = new CreatePlansController();
const updatePlansController = new UpdatePlansController();
const deletePlansController = new DeletePlansController();

const createStudentPlanController = new CreateStudentPLanController();
const findStudentPlanController = new FindStudentPlanController();
const findUniqueStudentPlanController = new FindUniqueStudentPlanController();

routes.post('/authenticate/', authenticateUsersController.handle);

routes.post('/students/', createStudentsController.handle);

routes.put('/student/update', updateStudentsController.handle);

routes.delete('/student/delete/:id', deleteStudentsController.handle);

routes.get('/users/find', findUsersTokenController.handle);

routes.get('/students/listStudents', getAllStudentsController.handle);

routes.get('/students/findStudent/:id', findStudentController.handle);

routes.get('/plans/listPlans', listPlansController.handle);

routes.post('/plans/createPlans', createPlansController.handle);

routes.get('/plans/findPlan', findPlansController.handle);

routes.put('/plans/update', updatePlansController.handle);

routes.delete('/plans/delete/:id', deletePlansController.handle);

routes.post('/installments/createStudentPlan', createStudentPlanController.handle);
routes.get('/installments/findStudentPlan/:id', findStudentPlanController.handle);
routes.get('/installments/findUniqueStudentPlan/:id', findUniqueStudentPlanController.handle);


export { routes };
