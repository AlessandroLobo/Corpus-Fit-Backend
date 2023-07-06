import { Request, Response } from 'express'
import { ListTrainingsUseCase } from './ListTrainingsUseCase';



export class ListTrainingsController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;
    try {
      const listTrainingsUseCase = new ListTrainingsUseCase();
      const result = await listTrainingsUseCase.execute({
        id: id ? String(id) : undefined,

      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
