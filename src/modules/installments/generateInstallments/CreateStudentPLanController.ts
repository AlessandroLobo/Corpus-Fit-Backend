import { Request, Response } from 'express';
import { CreateStudentPlanUseCase } from './CreateStudentPLanUseCase';

export class CreateStudentPLanController {
  async handle(request: Request, response: Response) {
    try {
      const createStudentPlanUseCase = new CreateStudentPlanUseCase();

      const {
        planValue,
        studentId,
        planId,
        dueDate,
        createdAt,
      } = request.body;

      const result = await createStudentPlanUseCase.execute({
        planValue,
        studentId,
        planId,
        dueDate,
        createdAt,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating user: ${error.message}` });
    }
  }
}
