import { prisma } from "../../../database/prismaClient";

interface IListStudentRoutinesUseCase {
  id?: string;
}

export class ListStudentRoutinesUseCase {
  async execute({ id }: IListStudentRoutinesUseCase) {
    const studentRoutines = await prisma.studentRoutine.findMany({
      where: {
        studentId: { equals: id || '' }
      },
      include: {
        routine: true
      },
      orderBy: {
        createdAt: 'asc'
      },
    });
    return { studentRoutines };
  }
}
