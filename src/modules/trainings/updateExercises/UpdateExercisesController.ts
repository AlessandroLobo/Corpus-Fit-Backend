import { Request, Response } from 'express';
import { UpdateExercisesUseCase } from './UpdateExercisesUseCase';

export class UpdateExercisesController {
  async handle(request: Request, response: Response) {
    console.log('Request body', request.body)
    try {
      const updateExercisesUseCase = new UpdateExercisesUseCase();

      const {
        id,
        name,
        description,
        url,
        muscleGroupId,
      } = request.body;

      console.log(request.body);

      const result = await updateExercisesUseCase.execute({
        id,
        name,
        description,
        url,
        muscleGroupId,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating user: ${error.message}` });
    }
  }
}
