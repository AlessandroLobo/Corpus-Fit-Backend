import { Request, Response } from 'express'
import { FindPlanUseCase } from './FindPlanUseCase';



export class FindPlanController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;
    console.log(name)

    try {
      const findPlanUseCase = new FindPlanUseCase();
      const result = await findPlanUseCase.execute({
        name: name ? String(name) : undefined,

      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
