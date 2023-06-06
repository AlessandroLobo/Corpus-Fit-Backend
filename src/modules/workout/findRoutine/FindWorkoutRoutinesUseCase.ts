import { prisma } from "../../../database/prismaClient";

interface IFindWorkoutRoutinesUseCase {
  name?: string;

}

export class FindWorkoutRoutinesUseCase {
  async execute({ name }: IFindWorkoutRoutinesUseCase) {
    const workoutRoutines = await prisma.routine.findMany({
      where: {
        AND: [
          {
            OR: [
              { name: { contains: name || '' } },
            ]
          }
        ]
      },
      orderBy: {
        name: 'asc'
      },
    });
    console.log(workoutRoutines)
    return { workoutRoutines };
  }

}
