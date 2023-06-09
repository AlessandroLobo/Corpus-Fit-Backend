import { prisma } from "../../../database/prismaClient";

interface IFindWorkoutRoutinesUseCase {
  id: string;
}

export class FindWorkoutRoutinesUseCase {
  async execute({ id }: IFindWorkoutRoutinesUseCase) {
    const workoutRoutine = await prisma.routine.findUnique({
      where: {
        id: id,
      },
    });
    return { workoutRoutine };
  }
}
