import { Request, Response } from 'express';
import { CreateStudentsUseCase } from './CreateStudentsUseCase';

export class CreateStudentsController {
  async handle(request: Request, response: Response) {
    try {
      const createStudentsUseCase = new CreateStudentsUseCase();

      const {
        name,
        email,
        password,
        birthDate,
        cpf,
        status,
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

      const result = await createStudentsUseCase.execute({
        name,
        email,
        password,
        cpf,
        status,
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
