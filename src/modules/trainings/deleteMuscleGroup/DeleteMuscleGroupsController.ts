import { Request, Response } from 'express';
import { DeleteMuscleGroupUseCase } from './DeleteMuscleGroupUseCase';


export class DeleteMuscleGroupsController {
  async handle(request: Request, response: Response) {
    try {
      const deleteMuscleGroupUseCase = new DeleteMuscleGroupUseCase();

      const id = request.params.id;

      console.log(request.body);

      const result = await deleteMuscleGroupUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
