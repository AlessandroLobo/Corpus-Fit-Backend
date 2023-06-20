import { prisma } from "../../../database/prismaClient";

interface IListTrainingsUseCase {
  id?: string;
}

export class ListTrainingsUseCase {
  async execute({ id }: IListTrainingsUseCase) {
    const trainings = await prisma.training.findMany({
      where: {
        trainingSheetId: { equals: id || '' }
      },
      orderBy: {
        createdAt: 'asc'
      },
    });
    console.log(trainings)
    return { trainings };
  }
}
