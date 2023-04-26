import { Router } from 'express'
import { CreateUsersController } from './modules/users/useCases/createUsers/CreateUsersController'
import { AuthenticateUsersController } from './modules/account/authenticateUser/AuthenticateUserController'
import { FindUsersController } from './modules/users/useCases/findUsers/FindUsersController'
import { ListPlansController } from './modules/plans/listPlans/ListPlansController'

const routes = Router()

const createUsersController = new CreateUsersController()
const authenticateUsersController = new AuthenticateUsersController()
const findUsersController = new FindUsersController()
const listPlansController = new ListPlansController()

routes.post('/authenticate/', authenticateUsersController.handle)

routes.post('/users/', createUsersController.handle)

routes.get('/users/find', findUsersController.handle)

routes.get('/plans/listPlans', listPlansController.handle);

export { routes }
