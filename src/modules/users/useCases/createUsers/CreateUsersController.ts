import { type Request, type Response } from 'express'
import { CreateUsersUseCase } from './CreateUsersUseCase'

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const createUsersUseCase = new CreateUsersUseCase()

    const { name, cpf, email, password, birth_date, weight, gender, phone, CEP, city, address, number, state, planId, createdAt } = request.body


    const result = await createUsersUseCase.execute({
      name,
      cpf,
      email,
      password,
      birth_date,
      weight,
      gender,
      phone,
      CEP,
      city,
      address,
      number,
      state,
      planId,
      createdAt,
    })
    return response.status(201).json(result)
  }
}
