import { prisma } from "../../../database/prismaClient";

interface IDeleteRoutinesUseCase {
  id: string;
}
export class DeleteRoutinesUseCase {
  async delete(id: string) {
    console.log('id do exercidios backend', id)
    const trainings = await prisma.routine.delete({
      where: {
        id,
      },
    });
    console.log('exercise', trainings)
    return trainings;
  }
}
