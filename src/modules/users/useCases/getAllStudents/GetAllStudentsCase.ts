import { prisma } from "../../../../database/prismaClient";
import dayjs from 'dayjs';

interface GetAllStudentsCaseProps {
  id?: string;
  name?: string;
  email?: string;
  limit?: number;
  offset?: number;

}

interface MaxDueDate {
  studentId: number;
  max: string;
}

export class GetAllStudentsCase {
  async execute({ id, name, email, limit = 10, offset = 0 }: GetAllStudentsCaseProps) {

    const maxDueDates = await prisma.$queryRaw<MaxDueDate[]>`SELECT MAX(dueDate) as max, studentId FROM student_plans GROUP BY studentId;`;
    const maxDueDatesMap = Object.fromEntries(maxDueDates.map(({ studentId, max }) => [studentId, max]));

    const [users, count] = await Promise.all([
      prisma.student.findMany({
        where: {
          AND: [
            {
              OR: [
                { name: { contains: name || '' } },
                { email: { contains: email || '' } }
              ]
            }
          ]
        },
        orderBy: {
          name: 'asc'
        },
        skip: offset,
        take: limit
      }),

      prisma.student.count({
        where: {
          AND: [
            {
              OR: [
                { name: { contains: name || '' } },
                { email: { contains: email || '' } }
              ]
            }
          ]
        }
      })
    ]);

    const formatDate = (date: string) => {
      return dayjs(date).format('DD/MM/YYYY');
    };

    const formattedUsers = await Promise.all(users.map(async user => {
      let maxDueDate = null;
      const hasPlans = await prisma.studentPlan.count({
        where: {
          AND: [
            { studentId: user.id },
            { dueDate: { gte: dayjs().startOf('month').toDate() } } // Verifica se a data de vencimento é maior ou igual ao início do mês atual
          ]
        }
      });

      if (hasPlans && maxDueDatesMap[user.id]) {
        maxDueDate = formatDate(maxDueDatesMap[user.id]);
      }

      return { ...user, maxDueDate };
    }));


    return { users: formattedUsers, total: count };
  }
}
