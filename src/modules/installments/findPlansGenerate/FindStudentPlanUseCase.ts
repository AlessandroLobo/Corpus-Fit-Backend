import { prisma } from "../../../database/prismaClient";
import dayjs from 'dayjs';

interface IFindStudentPlanUseCase {
  id: string;
}

export class FindStudentPlanUseCase {
  async execute({ id }: IFindStudentPlanUseCase) {
    console.log(id)
    const studentPlans = await prisma.studentPlan.findMany({
      where: {
        studentId: id,
      },
      include: {
        plan: true,
        financials: true
      }
    });

    // Formata as datas para o formato desejado
    const formattedStudentPlans = studentPlans.map(plan => ({
      ...plan,
      createdAt: dayjs(plan.createdAt).format('DD/MM/YYYY'),
      dueDate: dayjs(plan.dueDate).format('DD/MM/YYYY')
    }));

    console.log('StudentPlans--', formattedStudentPlans)
    return formattedStudentPlans;
  }
}
