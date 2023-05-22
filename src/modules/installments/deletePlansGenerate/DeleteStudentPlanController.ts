import { Request, Response } from 'express';
import { DeleteStudentPlanUseCase } from './DeleteStudentPlanUseCase';


export class DeleteStudentPlanController {
  async handle(request: Request, response: Response) {
    try {
      const deleteStudentPlanUseCase = new DeleteStudentPlanUseCase();

      const id = request.params.id;

      console.log(request.body);

      const result = await deleteStudentPlanUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
