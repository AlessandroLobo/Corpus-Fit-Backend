import { Request, Response } from 'express';
import { UpdateTrainingsUseCase } from './UpdateTrainingsUseCase';

export class UpdateTrainingsController {
  async handle(request: Request, response: Response) {
    try {
      const updateTrainingsUseCase = new UpdateTrainingsUseCase();

      const {
        id,
        repetitions,
        restTimeSeconds,
        weight,
      } = request.body;

      console.log(request.body);

      const result = await updateTrainingsUseCase.execute({
        id,
        repetitions,
        restTimeSeconds,
        weight,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating user: ${error.message}` });
    }
  }
}
