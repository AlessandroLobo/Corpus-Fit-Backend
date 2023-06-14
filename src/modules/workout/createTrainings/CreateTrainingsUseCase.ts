import { prisma } from '../../../database/prismaClient';

interface ICreateTrainingsUseCase {
  name: string;
  muscleGroupId?: string;
  exerciseId?: string;
  repetitions?: number;
  restTimeSeconds?: number;
  weight?: number;
}

export class CreateTrainingsUseCase {
  async execute({
    name,
    muscleGroupId,
    exerciseId,
    repetitions,
    restTimeSeconds,
    weight,
  }: ICreateTrainingsUseCase) {
    // Salvar o treino
    const training = await prisma.training.create({
      data: {
        name,
        muscleGroup: { connect: { id: muscleGroupId } },
        exercise: { connect: { id: exerciseId } },
        repetitions,
        restTimeSeconds,
        weight,
      },
    });

    return training;
  }
}
