import { Request, Response } from 'express';
import { UpdatePlansUseCase } from './UpdatePlansUseCase';

export class UpdatePlansController {
  async handle(request: Request, response: Response) {
    console.log('Request body', request.body)
    try {
      const updatePlansUseCase = new UpdatePlansUseCase();

      const {
        id,
        name,
        duration,
        price,
        createdAt
      } = request.body;

      console.log(request.body);

      const result = await updatePlansUseCase.execute({
        id,
        name,
        duration,
        price,
        createdAt
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating user: ${error.message}` });
    }
  }
}
