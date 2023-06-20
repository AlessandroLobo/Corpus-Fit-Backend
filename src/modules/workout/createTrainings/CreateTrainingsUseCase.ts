import { prisma } from '../../../database/prismaClient';

interface ICreateTrainingsUseCase {
  name: string;
  muscleGroupId?: string;
  exerciseId?: string;
  trainingSheetId?: string;
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
        repetitions,
        restTimeSeconds,
        weight,
      },
    });

    return training;
  }
}
