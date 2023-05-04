import { Request, Response } from 'express';
import { CreateUsersUseCase } from './CreateUsersUseCase';

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    try {
      const createUsersUseCase = new CreateUsersUseCase();

      const {
        name,
        cpf,
        email,
        password,
        birthDate,
        weight,
        gender,
        phone,
        CEP,
        city,
        address,
        number,
        state,
        planId,
        createdAt
      } = request.body;

      const result = await createUsersUseCase.execute({
        name,
        cpf,
        email,
        password,
        birthDate: birthDate,
        weight,
        gender,
        phone,
        CEP,
        city,
        address,
        number,
        state,
        planId,
        createdAt: createdAt,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating user: ${error.message}` });
    }
  }
}
