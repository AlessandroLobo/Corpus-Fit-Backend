import { Request, Response } from 'express';
import dayjs from 'dayjs';
import { DeleteUsersUseCase } from './DeleteUsersUseCase';

export class DeleteUsersController {
  async handle(request: Request, response: Response) {
    console.log(request.params.id)
    try {
      const deleteUsersUseCase = new DeleteUsersUseCase();

      const id = request.params.id;

      console.log(request.body);

      const result = await deleteUsersUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
