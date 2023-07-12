import { prisma } from "../../../database/prismaClient";

interface IUpdateTrainingsUseCase {
  id: string;
  sets,
  repetitions?: number;
  restTimeSeconds?: number;
  weight?: number;
}

export class UpdateTrainingsUseCase {
  async execute({
    id,
    sets,
    repetitions,
    restTimeSeconds,
    weight,
  }: IUpdateTrainingsUseCase) {
    // Salvar o plano
    const data: Record<string, number> = {};
    
    if (sets !== undefined) {
      data.sets = sets;
    }

    if (repetitions !== undefined) {
      data.repetitions = repetitions;
    }

    if (restTimeSeconds !== undefined) {
      data.restTimeSeconds = restTimeSeconds;
    }

    if (weight !== undefined) {
      data.weight = weight;
    }

    if (Object.keys(data).length === 0) {
      // Se todos os campos forem undefined, não faz nada
      return;
    }

    const exercise = await prisma.training.update({
      where: {
        id,
      },
      data,
    });

    console.log('exercício atualizado com sucesso', exercise);
    return exercise;
  }
}
