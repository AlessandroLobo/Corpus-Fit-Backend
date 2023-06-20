import { prisma } from "../../../database/prismaClient";

interface IDeleteTrainingSheetsUseCase {
  id: string;
}
export class DeleteTrainingSheetsUseCase {
  async delete(id: string) {
    console.log('id do exercidios backend', id)
    const trainingSheets = await prisma.trainingSheet.delete({
      where: {
        id,
      },
    });
    console.log('exercise', trainingSheets)
    return trainingSheets;
  }
}
