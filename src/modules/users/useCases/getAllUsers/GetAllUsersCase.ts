import { prisma } from "../../../../database/prismaClient";

interface GetAllUsersCaseProps {
  name?: string;
  email?: string;
  limit?: number;
  offset?: number;
}

export class GetAllUsersCase {
  async execute({ name, email, limit = 10, offset = 0 }: GetAllUsersCaseProps) {
    const users = await prisma.user.findMany({
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

  async countUsers({ name, email }: GetAllUsersCaseProps) {
    const count = await prisma.user.count({
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
