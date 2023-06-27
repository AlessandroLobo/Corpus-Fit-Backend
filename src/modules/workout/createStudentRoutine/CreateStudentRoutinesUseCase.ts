import { prisma } from '../../../database/prismaClient';
import dayjs from 'dayjs';

interface ICreateStudentRoutinesUseCase {
  name: string,
  studentId: string,
  routineId: string,
  createdAt: Date,
}

export class CreateStudentRoutinesUseCase {
  async execute({
    name,
    studentId,
    routineId,
    createdAt,
  }: ICreateStudentRoutinesUseCase) {

    const formattedCreatedAt = dayjs().toDate();
    // Salvar a rotina
    const studentRoutines = await prisma.studentRoutine.create({
      data: {
        name,
        studentId,
        routineId,
        createdAt: formattedCreatedAt,
      },
    });
    return studentRoutines;
  }
}
