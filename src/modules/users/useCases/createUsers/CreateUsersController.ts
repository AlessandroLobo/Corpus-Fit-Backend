import { type Request, type Response } from 'express'
import { CreateUsersUseCase } from './CreateUsersUseCase'

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const createUsersUseCase = new CreateUsersUseCase()

    const { username, password, expiration_date } = request.body

    const result = await createUsersUseCase.execute({
      username,
      password,
      expiration_date,
    })
    return response.status(201).json(result)
  }
}
