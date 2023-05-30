import dayjs from 'dayjs';
import { prisma } from '../../../database/prismaClient';

interface ICreateExerciseUseCase {
  name: string;
  description?: string;
  url: string;
  muscleGroupId: string;
}

export class CreateExerciseUseCase {
  async execute({
    name,
    description,
    url,
    muscleGroupId,
  }: ICreateExerciseUseCase) {
    const formattedCreatedAt = dayjs().toDate();

    const formattedDescription = description ?? '';

    // Salvar o exercício
    const exercise = await prisma.exercise.create({
      data: {
        name,
        description: formattedDescription,
        url,
        muscleGroupId,
        createdAt: formattedCreatedAt,
      },
    });

    return exercise;
  }
}
