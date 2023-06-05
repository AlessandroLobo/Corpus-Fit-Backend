import { prisma } from '../../../database/prismaClient';

interface ICreateTrainingsUseCase {
  name: string;
  muscleGroupId?: string;
  exerciseId?: string;
  repetitions?: number;
  restTimeSeconds?: number;
  weight?: number;
  routineId: string;
}

export class CreateTrainingsUseCase {
  async execute({
    name,
    muscleGroupId,
    exerciseId,
    repetitions,
    restTimeSeconds,
    weight,
    routineId,
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
        routine: { connect: { id: routineId } },
      },
    });

    return training;
  }
}
