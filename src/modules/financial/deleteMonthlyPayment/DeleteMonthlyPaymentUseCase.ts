import { prisma } from "../../../database/prismaClient";

interface IDeleteMonthlyPaymentController {
  id: string;
}
export class DeleteMonthlyPaymentUseCase {
  async delete(id: string) {
    const financial = await prisma.financial.delete({
      where: {
        id,
      },
    });
    console.log(`O plano com id ${id} foi deletado com sucesso!`);
    return financial;
  }
}
