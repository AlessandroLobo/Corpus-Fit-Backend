import { prisma } from "../../../database/prismaClient";

interface IDeleteMuscleGroupUseCase {
  id: string;
}
export class DeleteMuscleGroupUseCase {
  async delete(id: string) {
    const plan = await prisma.muscleGroup.delete({
      where: {
        id,
      },
    });
    return plan;
  }
}
