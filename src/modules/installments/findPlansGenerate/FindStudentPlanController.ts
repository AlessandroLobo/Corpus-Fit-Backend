import { Request, Response } from 'express';
import { FindStudentPlanUseCase } from './FindStudentPlanUseCase';

export class FindStudentPlanController {
  async handle(request: Request, response: Response) {
    console.log(request.params)
    try {
      const { id } = request.params;

      const findStudentPlanUseCase = new FindStudentPlanUseCase();

      const student = await findStudentPlanUseCase.execute({ id });

      return response.status(200).json(student);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
