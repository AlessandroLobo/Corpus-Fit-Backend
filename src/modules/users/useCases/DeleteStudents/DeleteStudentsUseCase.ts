import { prisma } from '../../../../database/prismaClient';

interface IDeleteStudents {
  id: string;
}
export class DeleteStudentsUseCase {
  async delete(id: string) {
    const student = await prisma.student.delete({
      where: {
        id,
      },
    });
    return student;
  }
}
