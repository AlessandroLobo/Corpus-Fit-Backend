import { Request, Response } from 'express'
import { FindMuscleGroupUseCase } from './FindMuscleGroupUseCase';



export class FindMuscleGroupController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;
    console.log(name)

    try {
      const findMuscleGroupUseCase = new FindMuscleGroupUseCase();
      const result = await findMuscleGroupUseCase.execute({
        name: name ? String(name) : undefined,

      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
