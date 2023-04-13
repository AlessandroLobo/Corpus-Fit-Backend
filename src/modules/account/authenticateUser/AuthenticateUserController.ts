import { type Request, type Response } from 'express'
import { AuthenticateUserCase } from './AuthenticateUserCase'


export class AuthenticateUsersController {
  async handle(request: Request, response: Response) {
    const { email, password, } = request.body

    const authenticateUserUseCase = new AuthenticateUserCase()
    const result = await authenticateUserUseCase.execute({
      email,
      password,
    })
    return response.status(201).json(result)
  }
}
