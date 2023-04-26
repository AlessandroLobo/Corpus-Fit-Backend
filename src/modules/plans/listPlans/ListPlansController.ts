import { Request, Response } from 'express';
import { ListPlansUseCase } from './ListPlansUseCase';

export class ListPlansController {
  async handle(request: Request, response: Response) {
    console.log('Controler')

    try {
      const listPlansUseCase = new ListPlansUseCase();
      const plans = await listPlansUseCase.execute();

      return response.status(200).json(plans);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
