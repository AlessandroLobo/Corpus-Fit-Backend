import { Request, Response } from 'express';
import { CreateMuscleGroupUseCase } from './CreateMuscleGroupUseCase';

export class CreateMuscleGroupController {
  async handle(request: Request, response: Response) {
    try {
      const createMuscleGroupUseCase = new CreateMuscleGroupUseCase();

      const {
        name,
        createdAt
      } = request.body;

      const result = await createMuscleGroupUseCase.execute({
        name,
        createdAt: createdAt,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating user: ${error.message}` });
    }
  }
}
