import { Request, Response } from 'express';
import { DeleteRoutinesUseCase } from './DeleteRoutinesUseCase';


export class DeleteRoutinesController {
  async handle(request: Request, response: Response) {
    try {
      const deleteRoutinesUseCase = new DeleteRoutinesUseCase();

      const id = request.params.id;

      console.log('id do exercidios backend controler ======', request.params.id);

      const result = await deleteRoutinesUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
