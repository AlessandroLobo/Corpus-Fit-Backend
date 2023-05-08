import { prisma } from "../../../database/prismaClient";

interface IDeletePlans {
  id: string;
}
export class DeletePlansUseCase {
  async delete(id: string) {
    const plan = await prisma.plan.delete({
      where: {
        id,
      },
    });
    console.log(`O plano com id ${id} foi atualizado com sucesso!`);
    return plan;
  }
}
