import { prisma } from "../../../database/prismaClient";

interface IDeleteExercisesUseCase {
  id: string;
}
export class DeleteExercisesUseCase {
  async delete(id: string) {
    console.log('id do exercidios backend',id)
    const exercise = await prisma.exercise.delete({
      where: {
        id,
      },
    });
    console.log('exercise', exercise)
    return exercise;
  }
}
