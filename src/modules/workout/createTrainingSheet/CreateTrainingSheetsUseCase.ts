import { prisma } from '../../../database/prismaClient';
import dayjs from 'dayjs';

interface ICreateTrainingSheetsUseCase {
  name: string,
  workoutType: string,
  trainingId: string,
  exerciseId: string,
  routineId: string,
}

export class CreateTrainingSheetsUseCase {
  async execute({
    name,
    workoutType,
    trainingId,
    exerciseId,
    routineId,
  }: ICreateTrainingSheetsUseCase) {

    // Salvar a rotina
    const trainingSheets = await prisma.trainingSheet.create({
      data: {
        name,
        workoutType,
        trainingId,
        exerciseId,
        routineId,
      },
    });
    return trainingSheets;
  }
}
