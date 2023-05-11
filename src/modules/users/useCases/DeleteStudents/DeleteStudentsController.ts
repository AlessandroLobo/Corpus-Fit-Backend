import { Request, Response } from 'express';
import dayjs from 'dayjs';
import { DeleteStudentsUseCase } from './DeleteStudentsUseCase';

export class DeleteStudentsController {
  async handle(request: Request, response: Response) {
    try {
      const deleteStudentsController = new DeleteStudentsUseCase();

      const id = request.params.id;

      console.log(request.body);

      const result = await deleteStudentsController.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
