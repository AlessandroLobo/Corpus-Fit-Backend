import { Request, Response } from 'express';
import { CreateWorkoutRoutinesUseCase } from './CreateWorkoutRoutinesUseCase';

export class CreateWorkoutRoutinesController {
  async handle(request: Request, response: Response) {
    try {
      const createWorkoutRoutinesUseCase = new CreateWorkoutRoutinesUseCase();

      const {
        name,
        workoutType,
        objective,
        observation,
        studentId,
        startDate,
        endDate,
        createdAt,
      } = request.body;

      const result = await createWorkoutRoutinesUseCase.execute({
        name,
        workoutType,
        objective,
        observation,
        studentId,
        startDate,
        endDate,
        createdAt,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating workout routines: ${error.message}` });
    }
  }
}
