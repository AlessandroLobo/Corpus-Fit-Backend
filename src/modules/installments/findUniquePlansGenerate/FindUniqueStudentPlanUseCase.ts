import { prisma } from "../../../database/prismaClient";
import dayjs from 'dayjs';

interface IFindStudentPlanUseCase {
  id: string;
}

export class FindUniqueStudentPlanUseCase {
  async execute({ id }: IFindStudentPlanUseCase) {
    console.log(id)
    const studentPlans = await prisma.studentPlan.findUnique({
      where: {
        id: id,
      },
      include: {
        plan: true,
        financials: true
      }
    });

    if (!studentPlans) {
      return [];
    }

    const formattedStudentPlans = Object.assign({}, studentPlans, {
      plan: undefined,
      financials: undefined,
      createdAt: dayjs(studentPlans.createdAt).format('DD/MM/YYYY'),
      dueDate: dayjs(studentPlans.dueDate).format('DD/MM/YYYY')
    });

    console.log('StudentPlans--', formattedStudentPlans);
    return formattedStudentPlans;

  }
}
