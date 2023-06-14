import { prisma } from "../../../database/prismaClient";

interface IListTrainingSheetsUseCase {
  name?: string;

}

export class ListTrainingSheetsUseCase {
  async execute({ name }: IListTrainingSheetsUseCase) {
    const trainingSheets = await prisma.trainingSheet.findMany({
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
    return { trainingSheets };
  }

}
