import { Request, Response } from 'express';
import { CreateTrainingSheetsUseCase } from './CreateTrainingSheetsUseCase';

export class CreateTrainingSheetsController {
  async handle(request: Request, response: Response) {
    try {
      const createTrainingSheetsUseCase = new CreateTrainingSheetsUseCase();

      const {
        name,
        workoutType,
        duration,
        exerciseId,
        routineId,
      } = request.body;

      const result = await createTrainingSheetsUseCase.execute({
        name,
        workoutType,
        duration,
        exerciseId,
        routineId,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating workout routines: ${error.message}` });
    }
  }
}
