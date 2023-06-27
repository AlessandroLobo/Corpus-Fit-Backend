import { Request, Response } from 'express';
import { CreateStudentRoutinesUseCase } from './CreateStudentRoutinesUseCase';

export class CreateStudentRoutinesController {
  async handle(request: Request, response: Response) {
    try {
      const createStudentRoutinesUseCase = new CreateStudentRoutinesUseCase();

      const {
        name,
        studentId,
        routineId,
        createdAt,
      } = request.body;

      const result = await createStudentRoutinesUseCase.execute({
        name,
        studentId,
        routineId,
        createdAt,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating workout routines: ${error.message}` });
    }
  }
}
