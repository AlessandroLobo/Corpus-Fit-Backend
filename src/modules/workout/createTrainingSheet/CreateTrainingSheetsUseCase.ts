import { prisma } from '../../../database/prismaClient';
import dayjs from 'dayjs';

interface ICreateTrainingSheetsUseCase {
  name: string,
  workoutType: string,
  trainingId: string,
  exerciseId: string,
}

export class CreateTrainingSheetsUseCase {
  async execute({
    name,
    workoutType,
    trainingId,
    exerciseId,
  }: ICreateTrainingSheetsUseCase) {

    // Salvar a rotina
    const trainingSheets = await prisma.trainingSheet.create({
      data: {
        name,
        workoutType,
        trainingId,
        exerciseId,
      },
    });
    return trainingSheets;
  }
}
