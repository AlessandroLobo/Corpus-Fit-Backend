import dayjs from "dayjs";
import { prisma } from "../../../database/prismaClient";


interface ICreateMonthlyPaymentUseCase {
  studentId: string,
  paymentType: string,
  paymentValue: number,
  studentPlanId: string,
}

export class CreateMonthlyPaymentUseCase {
  async execute({
    studentId,
    paymentType,
    paymentValue,
    studentPlanId,
  }: ICreateMonthlyPaymentUseCase) {

    const currentDate = dayjs().toDate();

    // Salvar o plano
    const monthlyPayment = await prisma.financial.create({
      data: {
        studentId,
        paymentDate: currentDate,
        paymentType,
        paymentValue,
        createdAt: currentDate,
        updatedAt: currentDate,
        studentPlanId,
      },
    });
    console.log(monthlyPayment)
    return monthlyPayment;
  }
}
