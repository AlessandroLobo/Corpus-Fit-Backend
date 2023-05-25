import { prisma } from "../../../database/prismaClient";

interface IFindMuscleGroupUseCase {
  name?: string;

}

export class FindMuscleGroupUseCase {
  async execute({ name }: IFindMuscleGroupUseCase) {
    const muscleGroup = await prisma.muscleGroup.findMany({
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
    console.log('muscleGroup', muscleGroup)
    return { muscleGroup };
  }

}
