import { Request, Response } from 'express'
import { FindStudentRoutinesUseCase } from './FindStudentRoutinesUseCase';

export class FindStudentRoutinesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const findStudentRoutinesUseCase = new FindStudentRoutinesUseCase();
      const result = await findStudentRoutinesUseCase.execute({
        id,
      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
