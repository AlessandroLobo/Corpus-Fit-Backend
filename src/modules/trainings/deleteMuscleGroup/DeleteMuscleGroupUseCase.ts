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
    console.log(`O plano com id ${id} foi atualizado com sucesso!`);
    return plan;
  }
}
