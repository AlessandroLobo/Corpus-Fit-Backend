import { Request, Response } from 'express';
import { DeleteMonthlyPaymentUseCase } from './DeleteMonthlyPaymentUseCase';


export class DeleteMonthlyPaymentController {
  async handle(request: Request, response: Response) {
    try {
      const deleteMonthlyPaymentUseCase = new DeleteMonthlyPaymentUseCase();

      const id = request.params.id;

      console.log(request.body);

      const result = await deleteMonthlyPaymentUseCase.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error deleting user: ${error.message}` });
    }
  }
}
