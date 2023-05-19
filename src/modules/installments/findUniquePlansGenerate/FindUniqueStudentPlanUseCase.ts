import { prisma } from "../../../database/prismaClient";
import dayjs from 'dayjs';

interface IFindStudentPlanUseCase {
  id: string;
}

function formatDate(date: Date): string {
  return dayjs(date).format('DD/MM/YYYY');
}

export class FindUniqueStudentPlanUseCase {
  async execute({ id }: IFindStudentPlanUseCase) {
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

    // Formatação das datas
    const formattedCreatedAt = formatDate(studentPlans.createdAt);
    const formattedDueDate = formatDate(studentPlans.dueDate);
    const formattedFinancials = studentPlans.financials.map(financial => {
      const formattedPaymentDate = formatDate(financial.paymentDate);
      const formattedCreatedAt = formatDate(financial.createdAt);
      const formattedUpdatedAt = formatDate(financial.updatedAt);
      return {
        ...financial,
        paymentDate: formattedPaymentDate,
        createdAt: formattedCreatedAt,
        updatedAt: formattedUpdatedAt
      };
    });

    const formattedStudentPlans = {
      ...studentPlans,
      plan: studentPlans.plan,
      financials: formattedFinancials,
      createdAt: formattedCreatedAt,
      dueDate: formattedDueDate
    };

    return formattedStudentPlans;

  }
}
