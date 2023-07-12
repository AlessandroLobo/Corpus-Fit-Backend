import { prisma } from '../../../database/prismaClient';

interface ICreateTrainingsUseCase {
  name: string;
  muscleGroupId?: string;
  exerciseId?: string;
  trainingSheetId?: string;
  sets?: number;
  repetitions?: number;
  restTimeSeconds?: number;
  weight?: number;
}

export class CreateTrainingsUseCase {
  async execute({
    name,
    muscleGroupId,
    exerciseId,
    trainingSheetId,
    sets,
    repetitions,
    restTimeSeconds,
    weight,
  }: ICreateTrainingsUseCase) {
    // Salvar o treino
    const training = await prisma.training.create({
      data: {
        name,
        muscleGroupId,
        exerciseId,
        trainingSheetId,
        sets,
        repetitions,
        restTimeSeconds,
        weight,
      },
    });

    return training;
  }
}
