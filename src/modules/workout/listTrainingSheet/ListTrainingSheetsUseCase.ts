import { prisma } from "../../../database/prismaClient";

interface IListTrainingSheetsUseCase {
  id?: string;
}

export class ListTrainingSheetsUseCase {
  async execute({ id }: IListTrainingSheetsUseCase) {
    const trainingSheets = await prisma.trainingSheet.findMany({
      where: {
        routineId: { equals: id || '' }
      },
      include: {
        Training: {
          include: {
            exercise: true
          }
        }
      },
      orderBy: {
        createdAt: 'asc'
      },
    });
    return { trainingSheets };
  }
}
