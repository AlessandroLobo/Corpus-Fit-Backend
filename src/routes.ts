import { Router } from 'express'
import { CreateUsersController } from './modules/users/useCases/createUsers/CreateUsersController'
import { AuthenticateUsersController } from './modules/account/authenticateUser/AuthenticateUserController'

const routes = Router()

const createUsersController = new CreateUsersController()
const authenticateUsersController = new AuthenticateUsersController()

routes.post('/authenticate/', authenticateUsersController.handle)

routes.post('/users/', createUsersController.handle)

export { routes }
