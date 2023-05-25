import { Request, Response } from 'express';
import { DeletePlansUseCase } from './DeletePlansUseCase';


export class DeletePlansController {
  async handle(request: Request, response: Response) {
    try {
      const deletePlansUseCase = new DeletePlansUseCase();

      const id = request.params.id;

      console.log(request.body);

      const result = await deletePlansUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
