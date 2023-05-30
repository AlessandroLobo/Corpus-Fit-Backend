import { Request, Response } from 'express';
import { CreateExerciseUseCase } from './CreateExercisesUseCase';

export class CreateExerciseController {
  async handle(request: Request, response: Response) {
    try {
      const createExerciseUseCase = new CreateExerciseUseCase();

      const {
        name,
        description,
        url,
        muscleGroupId,
      } = request.body;

      const result = await createExerciseUseCase.execute({
        name,
        description,
        url,
        muscleGroupId,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating exercise: ${error.message}` });
    }
  }
}
