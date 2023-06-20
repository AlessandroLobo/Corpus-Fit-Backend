import { Request, Response } from 'express';
import { DeleteTrainingSheetsUseCase } from './DeleteTrainingSheetsUseCase';


export class DeleteTrainingSheetsController {
  async handle(request: Request, response: Response) {
    try {
      const deleteTrainingSheetsUseCase = new DeleteTrainingSheetsUseCase();

      const id = request.params.id;

      console.log('id do exercidios backend controler ======', request.params.id);

      const result = await deleteTrainingSheetsUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
