import { Request, Response } from 'express';
import { DeleteStudentRoutineUseCase } from './DeleteStudentRoutineUseCase';


export class DeleteStudentRoutineController {
  async handle(request: Request, response: Response) {
    try {
      const deleteStudentRoutineUseCase = new DeleteStudentRoutineUseCase();

      const id = request.params.id;


      const result = await deleteStudentRoutineUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
