import { Request, Response } from 'express';
import { FindUserUseCase } from './FindUserUseCase';

export class FindUserController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const findUserUseCase = new FindUserUseCase();

      const user = await findUserUseCase.execute({ id });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
