import { Request, Response } from 'express';
import { CreatePlansUseCase } from './CreatePlansUseCase';

export class CreatePlansController {
  async handle(request: Request, response: Response) {
    try {
      const createPlansUseCase = new CreatePlansUseCase();

      const {
        name,
        duration,
        price,
        createdAt
      } = request.body;

      const result = await createPlansUseCase.execute({
        name,
        duration,
        price,
        createdAt: createdAt,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating user: ${error.message}` });
    }
  }
}
