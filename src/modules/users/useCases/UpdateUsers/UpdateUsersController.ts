import { Request, Response } from 'express';
import dayjs from 'dayjs';
import { UpdateUsersUseCase } from './UpdateUsersUseCase';

export class UpdateUsersController {
  async handle(request: Request, response: Response) {
    try {
      const updateUsersUseCase = new UpdateUsersUseCase();

      const {
        id,
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

      console.log(request.body);

      const result = await updateUsersUseCase.execute({
        id,
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
