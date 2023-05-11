import { prisma } from "../../../../database/prismaClient";

interface GetAllStudentsCaseProps {
  name?: string;
  email?: string;
  limit?: number;
  offset?: number;
}

export class GetAllStudentsCase {
  async execute({ name, email, limit = 10, offset = 0 }: GetAllStudentsCaseProps) {
    console.log(name)

    const users = await prisma.student.findMany({
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
    });

    const count = await this.countUsers({ name, email });

    return { users, total: count };
  }

  async countUsers({ name, email }: GetAllStudentsCaseProps) {
    const count = await prisma.student.count({
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
    });
    return count;
  }
}
