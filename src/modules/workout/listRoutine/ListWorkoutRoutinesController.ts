import { Request, Response } from 'express'
import { ListWorkoutRoutinesUseCase } from './ListWorkoutRoutinesUseCase';



export class ListWorkoutRoutinesController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;

    try {
      const listWorkoutRoutinesUseCase = new ListWorkoutRoutinesUseCase();
      const result = await listWorkoutRoutinesUseCase.execute({
        name: name ? String(name) : undefined,

      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
