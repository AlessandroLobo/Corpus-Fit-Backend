import { prisma } from "../../../database/prismaClient";

interface IUpdateTrainingsUseCase {
  id,
  repetitions,
  restTimeSeconds,
  weight,
}

export class UpdateTrainingsUseCase {
  async execute({
    id,
    repetitions,
    restTimeSeconds,
    weight,
  }: IUpdateTrainingsUseCase) {

    // Salvar o plano
    const exercise = await prisma.training.update({
      where: {
        id
      },
      data: {
        repetitions,
        restTimeSeconds,
        weight,
      },
    });
    console.log('exercício atualizado com sucesso', exercise)
    return exercise;
  }
}
