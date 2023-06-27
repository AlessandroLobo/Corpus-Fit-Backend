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
      orderBy: {
        createdAt: 'asc'
      },
    });
    console.log('student routine api', studentRoutines)
    return { studentRoutines };
  }
}
