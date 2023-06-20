import { prisma } from "../../../database/prismaClient";

interface IDeleteTrainingsUseCase {
  id: string;
}
export class DeleteTrainingsUseCase {
  async delete(id: string) {
    console.log('id do exercidios backend', id)
    const trainings = await prisma.training.delete({
      where: {
        id,
      },
    });
    console.log('exercise', trainings)
    return trainings;
  }
}
