import { Request, Response } from 'express'
import { GetAllUsersCase } from './GetAllUsersCase'



export class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const { name, email, limit, offset } = request.query;

    try {
      const getAllUsersCase = new GetAllUsersCase();
      const result = await getAllUsersCase.execute({
        name: name ? String(name) : undefined,
        email: email !== "" ? String(email) : undefined,
        limit: Number(limit) || 10,
        offset: Number(offset) || 0
      });

      return response.status(200).json(result);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Internal server error' });
    }
  }
}
