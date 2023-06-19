import { Request, Response } from 'express'
import { ListTrainingSheetsUseCase } from './ListTrainingSheetsUseCase';



export class ListTrainingSheetsController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;
    try {
      const listTrainingSheetsUseCase = new ListTrainingSheetsUseCase();
      const result = await listTrainingSheetsUseCase.execute({
        id: id ? String(id) : undefined,

      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
