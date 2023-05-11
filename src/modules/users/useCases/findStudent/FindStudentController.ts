import { Request, Response } from 'express';
import { FindStudentUseCase } from './FindStudentUseCase';

export class FindStudentController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const findStudentUseCase = new FindStudentUseCase();

      const student = await findStudentUseCase.execute({ id });

      return response.status(200).json(student);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
