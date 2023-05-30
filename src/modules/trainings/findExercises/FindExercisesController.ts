import { Request, Response } from 'express'
import { FindExercisesUseCase } from './FindExercisesUseCase';

export class FindExercisesController {
  async handle(request: Request, response: Response) {
    const { name, muscleGroupId } = request.query;
    console.log(name)

    try {
      const findExercisesUseCase = new FindExercisesUseCase();
      const result = await findExercisesUseCase.execute({
        name: name ? String(name) : undefined,
        muscleGroupId: muscleGroupId ? String(muscleGroupId) : undefined,
      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
