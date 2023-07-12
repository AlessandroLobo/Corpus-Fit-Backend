import { Request, Response } from 'express';
import { CreateTrainingsUseCase } from './CreateTrainingsUseCase';

export class CreateTrainingsController {
  async handle(request: Request, response: Response) {
    try {
      const createTrainingsUseCase = new CreateTrainingsUseCase();
      const {
        name,
        muscleGroupId,
        exerciseId,
        trainingSheetId,
        sets,
        repetitions,
        restTimeSeconds,
        weight,
      } = request.body;
      const result = await createTrainingsUseCase.execute({
        name,
        muscleGroupId,
        exerciseId,
        trainingSheetId,
        sets,
        repetitions,
        restTimeSeconds,
        weight,
      });
      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating trainings: ${error.message}` });
    }
  }
}
