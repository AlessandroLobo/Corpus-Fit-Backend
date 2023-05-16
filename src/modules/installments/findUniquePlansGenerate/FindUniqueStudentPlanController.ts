import { Request, Response } from 'express';
import { FindUniqueStudentPlanUseCase } from './FindUniqueStudentPlanUseCase';

export class FindUniqueStudentPlanController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const findUniqueStudentPlanUseCase = new FindUniqueStudentPlanUseCase();

      const student = await findUniqueStudentPlanUseCase.execute({ id });

      return response.status(200).json(student);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
