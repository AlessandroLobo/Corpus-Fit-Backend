import { prisma } from "../../../database/prismaClient";
import dayjs from 'dayjs';

interface IFindStudentPlanUseCase {
  id: string;
}


export class FindStudentPlanUseCase {
  async execute({ id }: IFindStudentPlanUseCase) {
    const studentPlans = await prisma.studentPlan.findMany({
      where: {
        studentId: id,
      },
      include: {
        plan: true,
        financials: true
      }
    });

    const formattedStudentPlans = studentPlans.map(plan => ({
      ...plan,
      createdAt: dayjs(plan.createdAt).format('DD/MM/YYYY'),
      dueDate: dayjs(plan.dueDate).format('DD/MM/YYYY'),
      financials: plan.financials.map(financial => ({
        ...financial,
        createdAt: dayjs(financial.createdAt).format('DD/MM/YYYY'),
        paymentDate: dayjs(financial.paymentDate).format('DD/MM/YYYY'),
        updatedAt: dayjs(financial.updatedAt).format('DD/MM/YYYY')
      }))
    }));
    console.log(formattedStudentPlans);
    return formattedStudentPlans;

  }
}
