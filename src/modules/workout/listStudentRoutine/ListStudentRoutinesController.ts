import { Request, Response } from 'express'
import { ListStudentRoutinesUseCase } from './ListStudentRoutinesUseCase';



export class ListStudentRoutinesController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;
    try {
      const listStudentRoutinesUseCase = new ListStudentRoutinesUseCase();
      const result = await listStudentRoutinesUseCase.execute({
        id: id ? String(id) : undefined,

      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
