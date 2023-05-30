import { Request, Response } from 'express';
import { DeleteExercisesUseCase } from './DeleteExercisesUseCase';


export class DeleteExercisesController {
  async handle(request: Request, response: Response) {
    try {
      const deleteExercisesUseCase = new DeleteExercisesUseCase();

      const id = request.params.id;

      console.log('id do exercidios backend controler ======', request.params.id);

      const result = await deleteExercisesUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
