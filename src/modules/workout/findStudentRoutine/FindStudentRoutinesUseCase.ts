import { prisma } from "../../../database/prismaClient";

interface IFindStudentRoutinesUseCase {
  id: string;
}

export class FindStudentRoutinesUseCase {
  async execute({ id }: IFindStudentRoutinesUseCase) {
    const workoutRoutine = await prisma.routine.findUnique({
      where: {
        id: id,
      },
    });
    return { workoutRoutine };
  }
}
