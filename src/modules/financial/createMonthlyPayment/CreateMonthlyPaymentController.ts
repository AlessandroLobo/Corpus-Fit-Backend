import { Request, Response } from 'express';
import { CreateMonthlyPaymentUseCase } from './CreateMonthlyPaymentUseCase';

export class CreateMonthlyPaymentController {
  async handle(request: Request, response: Response) {
    try {
      const createMonthlyPaymentUseCase = new CreateMonthlyPaymentUseCase();

      const {
        studentId,
        paymentType,
        paymentValue,
        studentPlanId,
      } = request.body;

      const result = await createMonthlyPaymentUseCase.execute({
        studentId,
        paymentType,
        paymentValue,
        studentPlanId,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ message: `Error creating user: ${error.message}` });
    }
  }
}
