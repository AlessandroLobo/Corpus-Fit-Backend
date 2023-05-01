import { Request, Response } from 'express';
import { CreateUsersUseCase } from './CreateUsersUseCase';
import dayjs from 'dayjs';

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

      // // Verificar se a data de nascimento é válida
      // if (!dayjs(birthDate, 'DD/MM/YYYY').isValid()) {
      //   return response.status(400).json({ message: 'Invalid birth date' });
      // }

      // const formattedBirthDate = dayjs(birthDate, 'DD/MM/YYYY').toISOString();
      // const formattedCreatedAt = dayjs(createdAt, 'DD/MM/YYYY HH:mm:ss').toISOString();


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
