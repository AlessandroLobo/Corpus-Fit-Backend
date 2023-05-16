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
    });

    // Formata a data para o formato desejado
    const formattedStudentPlans = studentPlans.map(plan => ({
      ...plan,
      createdAt: dayjs(plan.createdAt).format('DD/MM/YYYY HH:mm:ss')
    }));

    console.log('StudentPlans--', formattedStudentPlans)
    return formattedStudentPlans;
  }
}
