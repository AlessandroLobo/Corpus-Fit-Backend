import { prisma } from "../../../database/prismaClient";

interface IListWorkoutRoutinesUseCase {
  name?: string;

}

export class ListWorkoutRoutinesUseCase {
  async execute({ name }: IListWorkoutRoutinesUseCase) {
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
    return { workoutRoutines };
  }

}
