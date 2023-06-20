import { Request, Response } from 'express';
import { DeleteTrainingsUseCase } from './DeleteTrainingsUseCase';


export class DeleteTrainingsController {
  async handle(request: Request, response: Response) {
    try {
      const deleteTrainingsUseCase = new DeleteTrainingsUseCase();

      const id = request.params.id;

      console.log('id do exercidios backend controler ======', request.params.id);

      const result = await deleteTrainingsUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
