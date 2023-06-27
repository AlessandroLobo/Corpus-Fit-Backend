import { Router } from 'express';
import { AuthenticateUsersController } from './modules/account/authenticateUser/AuthenticateUserController';
import { FindUsersTokenController } from './modules/users/useCases/findUsersToken/FindUsersTokenController';

import { CreateStudentsController } from './modules/users/useCases/createStudents/CreateStudentsController';
import { UpdateStudentsController } from './modules/users/useCases/UpdateUsers/UpdateStudentsController';
import { GetAllStudentsController } from './modules/users/useCases/getAllStudents/GetAllStudentsController';
import { FindStudentController } from './modules/users/useCases/findStudent/FindStudentController';
import { DeleteStudentsController } from './modules/users/useCases/DeleteStudents/DeleteStudentsController';

import { CreatePlansController } from './modules/plans/createPlans/CreatePlansController';
import { FindPlanController } from './modules/plans/findPlan/findPlanController';
import { ListPlansController } from './modules/plans/listPlans/ListPlansController';
import { UpdatePlansController } from './modules/plans/UpdatePlans/UpdatePlansController';
import { DeletePlansController } from './modules/plans/deletePlans/DeletePlansController';
import { CreateStudentPLanController } from './modules/installments/generateInstallments/CreateStudentPLanController';
import { FindStudentPlanController } from './modules/installments/findPlansGenerate/FindStudentPlanController';
import { FindUniqueStudentPlanController } from './modules/installments/findUniquePlansGenerate/FindUniqueStudentPlanController';
import { CreateMonthlyPaymentController } from './modules/financial/createMonthlyPayment/CreateMonthlyPaymentController';
import { DeleteMonthlyPaymentController } from './modules/financial/deleteMonthlyPayment/DeleteMonthlyPaymentController';
import { DeleteStudentPlanController } from './modules/installments/deletePlansGenerate/DeleteStudentPlanController';
import { CreateMuscleGroupController } from './modules/trainings/createMuscleGroup/CreateMuscleGroupController';
import { DeleteMuscleGroupsController } from './modules/trainings/deleteMuscleGroup/DeleteMuscleGroupsController';
import { UpdateMuscleGroupsController } from './modules/trainings/updateMuscleGroup/UpdateMuscleGroupsController';
import { CreateExerciseController } from './modules/trainings/createExercises/CreateExercisesController';
import { FindExercisesController } from './modules/trainings/findExercises/FindExercisesController';
import { FindMuscleGroupController } from './modules/trainings/findMuscleGroup/FindMuscleGroupController';
import { DeleteExercisesController } from './modules/trainings/deleteExercises/DeleteExercisesController';
import { UpdateExercisesController } from './modules/trainings/updateExercises/UpdateExercisesController';
import { CreateWorkoutRoutinesController } from './modules/workout/createRoutine/CreateWorkoutRoutinesController';
import { CreateTrainingsController } from './modules/workout/createTrainings/CreateTrainingsController';
import { ListWorkoutRoutinesController } from './modules/workout/listRoutine/ListWorkoutRoutinesController';
import { FindWorkoutRoutinesController } from './modules/workout/findRoutine/FindWorkoutRoutinesController';
import { CreateTrainingSheetsController } from './modules/workout/createTrainingSheet/CreateTrainingSheetsController';
import { ListTrainingSheetsController } from './modules/workout/listTrainingSheet/ListTrainingSheetsController';
import { ListTrainingsController } from './modules/workout/listTrainings/ListTrainingsController';
import { DeleteTrainingsController } from './modules/workout/deleteTrainings/DeleteTrainingsController';
import { DeleteTrainingSheetsController } from './modules/workout/deleteTrainingSheet/DeleteTrainingSheetsController';
import { DeleteRoutinesController } from './modules/workout/deleteRoutine/DeleteRoutinesController';
import { CreateStudentRoutinesController } from './modules/workout/createStudentRoutine/CreateStudentRoutinesController';
import { FindStudentRoutinesController } from './modules/workout/findStudentRoutine/FindStudentRoutinesController';
import { ListStudentRoutinesController } from './modules/workout/listStudentRoutine/ListStudentRoutinesController';

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
const deleteStudentPlanController = new DeleteStudentPlanController();

const createMonthlyPaymentController = new CreateMonthlyPaymentController();
const deleteMonthlyPaymentController = new DeleteMonthlyPaymentController();

const createMuscleGroupController = new CreateMuscleGroupController();
const findMuscleGroupController = new FindMuscleGroupController();
const deleteMuscleGroupController = new DeleteMuscleGroupsController();
const updateMuscleGroupsController = new UpdateMuscleGroupsController();

const createExerciseController = new CreateExerciseController();
const findExercisesController = new FindExercisesController();
const deleteExercisesController = new DeleteExercisesController();
const updateExercisesController = new UpdateExercisesController();

const createWorkoutRoutinesController = new CreateWorkoutRoutinesController();
const findWorkoutRoutinesController = new FindWorkoutRoutinesController();
const listWorkoutRoutinesController = new ListWorkoutRoutinesController();
const deleteRoutinesController = new DeleteRoutinesController();

const createTrainingsController = new CreateTrainingsController();

const createTrainingSheetsController = new CreateTrainingSheetsController();
const listTrainingSheetsController = new ListTrainingSheetsController();
const deleteTrainingSheetsController = new DeleteTrainingSheetsController();

const deleteTrainingsController = new DeleteTrainingsController();
const listTrainingsController = new ListTrainingsController();

const createStudentRoutinesController = new CreateStudentRoutinesController();
const findStudentRoutinesController = new FindStudentRoutinesController();
const listStudentRoutinesController = new ListStudentRoutinesController();

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
routes.delete('/installments/deleteStudentPlan/:id', deleteStudentPlanController.handle);

routes.post('/financial/createMonthlyPayment', createMonthlyPaymentController.handle);
routes.delete('/financial/deleteMonthlyPayment/:id', deleteMonthlyPaymentController.handle);

routes.post('/trainings/createMuscleGroup', createMuscleGroupController.handle);
routes.get('/trainings/findMuscleGroup', findMuscleGroupController.handle);
routes.put('/trainings/updateMuscleGroup', updateMuscleGroupsController.handle);
routes.delete('/trainings/deleteMuscleGroup/:id', deleteMuscleGroupController.handle);

routes.post('/trainings/createExercise', createExerciseController.handle);
routes.get('/trainings/findExercises', findExercisesController.handle);
routes.delete('/trainings/deleteExercise/:id', deleteExercisesController.handle);
routes.put('/trainings/updateExercise', updateExercisesController.handle);

routes.post('/workout/createRoutine', createWorkoutRoutinesController.handle);
routes.get('/workout/findRoutine/:id', findWorkoutRoutinesController.handle);
routes.get('/workout/listRoutine', listWorkoutRoutinesController.handle);
routes.delete('/workout/deleteRoutine/:id', deleteRoutinesController.handle);

routes.post('/workout/createTrainings', createTrainingsController.handle);

routes.post('/workout/createTrainingSheet', createTrainingSheetsController.handle);
routes.get('/workout/listTrainingSheet', listTrainingSheetsController.handle);
routes.delete('/workout/deleteTrainingSheet/:id', deleteTrainingSheetsController.handle);

routes.delete('/workout/deleteTrainings/:id', deleteTrainingsController.handle);
routes.get('/workout/listTrainings', listTrainingsController.handle);

routes.post('/workout/createStudentRoutine', createStudentRoutinesController.handle);
routes.get('/workout/findStudentRoutine/:id', findStudentRoutinesController.handle);
routes.get('/workout/listStudentRoutine', listStudentRoutinesController.handle);

export { routes };
