import { prisma } from "../../../database/prismaClient";

interface IUpdateExercisesUseCase {
  id,
  name,
  description,
  url,
  muscleGroupId,
}

export class UpdateExercisesUseCase {
  async execute({
    id,
    name,
    description,
    url,
    muscleGroupId,
  }: IUpdateExercisesUseCase) {

    // Salvar o plano
    const exercise = await prisma.exercise.update({
      where: {
        id
      },
      data: {
        name,
        description,
        url,
        muscleGroupId,
      },
    });
    console.log('exercício atualizado com sucesso', exercise)
    return exercise;
  }
}
