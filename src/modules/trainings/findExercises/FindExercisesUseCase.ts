import { prisma } from "../../../database/prismaClient";

interface IFindExercisesUseCase {
  name?: string;
  muscleGroupId?: string;

}

export class FindExercisesUseCase {
  async execute({ name, muscleGroupId }: IFindExercisesUseCase) {
    const exercises = await prisma.exercise.findMany({
      where: {
        AND: [
          { name: { contains: name || '' } },
          { muscleGroupId: { equals: muscleGroupId || '' } }
        ]
      },
      orderBy: {
        name: 'asc'
      },
    });

    return { exercises };
  }

}
