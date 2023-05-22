import { prisma } from "../../../database/prismaClient";

interface IDeleteStudentPlanUseCase {
  id: string;
}
export class DeleteStudentPlanUseCase {
  async delete(id: string) {
    const studentPlan = await prisma.studentPlan.delete({
      where: {
        id,
      },
    });
    console.log(`O plano com id ${id} foi deletado com sucesso!`);
    return studentPlan;
  }
}
