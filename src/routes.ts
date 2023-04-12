import { Router } from 'express'
import { CreateUsersController } from './modules/users/useCases/createUsers/CreateUsersController'

const routes = Router()

const createUsersController = new CreateUsersController()

routes.post('/users/', createUsersController.handle)

export { routes }
