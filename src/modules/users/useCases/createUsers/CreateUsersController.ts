import { type Request, type Response } from 'express'
import { CreateUsersUseCase } from './CreateUsersUseCase'

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const createUsersUseCase = new CreateUsersUseCase()

    const { email, password, createdAt, planId } = request.body


    const result = await createUsersUseCase.execute({
      email,
      password,
      createdAt,
      planId,
    })
    return response.status(201).json(result)
  }
}
