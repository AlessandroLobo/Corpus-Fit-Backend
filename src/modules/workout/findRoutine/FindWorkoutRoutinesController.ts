import { Request, Response } from 'express'
import { FindWorkoutRoutinesUseCase } from './FindWorkoutRoutinesUseCase';

export class FindWorkoutRoutinesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const findWorkoutRoutinesUseCase = new FindWorkoutRoutinesUseCase();
      const result = await findWorkoutRoutinesUseCase.execute({
        id,
      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
