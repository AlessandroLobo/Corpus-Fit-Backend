import { Request, Response } from 'express';
import { UpdateMuscleGroupsUseCase } from './UpdateMuscleGroupsUseCase';

export class UpdateMuscleGroupsController {
  async handle(request: Request, response: Response) {
    console.log('Request body', request.body)
    try {
      const updateMuscleGroupsUseCase = new UpdateMuscleGroupsUseCase();

      const {
        id,
        name,
        createdAt
      } = request.body;

      console.log(request.body);

      const result = await updateMuscleGroupsUseCase.execute({
        id,
        name,
        createdAt
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating user: ${error.message}` });
    }
  }
}
