import { prisma } from '../../../../database/prismaClient';

interface IDeleteUsers {
  id: string;
}
export class DeleteUsersUseCase {
  async delete(id: string) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  }
}
