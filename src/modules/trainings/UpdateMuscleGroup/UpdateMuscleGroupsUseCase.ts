import { prisma } from "../../../database/prismaClient";

interface IUpdateMuscleGroupsUseCase {
  id,
  name,
  createdAt,
}

export class UpdateMuscleGroupsUseCase {
  async execute({
    id,
    name,
    createdAt
  }: IUpdateMuscleGroupsUseCase) {

    // Salvar o plano
    const muscleGroup = await prisma.muscleGroup.update({
      where: {
        id
      },
      data: {
        id,
        name,
        createdAt
      },
    });
    return muscleGroup;
  }
}
