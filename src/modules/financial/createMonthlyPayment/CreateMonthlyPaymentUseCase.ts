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

    console.log('Studeante plan vindo do front---------', studentPlanId)

    const studentPlan_Id = await prisma.financial.findFirst({
      where: {
        studentPlanId,
      },
    });

    console.log('Studente plan vindo do banco######', studentPlan_Id)

    if (studentPlan_Id) {

      throw new Error("Já existe pagamento para esse aluno");
    }

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
