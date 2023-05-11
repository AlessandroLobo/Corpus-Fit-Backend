import { Request, Response } from 'express';
import { UpdateStudentsUseCase } from './UpdateStudentsUseCase';

export class UpdateStudentsController {
  async handle(request: Request, response: Response) {
    console.log(request.body)
    try {
      const updateStudentsUseCase = new UpdateStudentsUseCase();

      const {
        id,
        name,
        cpf,
        email,
        status,
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

      console.log(request.body);

      const result = await updateStudentsUseCase.execute({
        id,
        name,
        cpf,
        email,
        status,
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
