// Arquivo: GetAllUsersCase.ts

import { prisma } from "../../../../database/prismaClient";

interface GetAllUsersCaseProps {
  name?: string;
  email?: string;
}

export class GetAllUsersCase {
  async execute({ name, email }: GetAllUsersCaseProps) {

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
      }
    })
    return users;
  }
}
