import { prisma } from '../../../database/prismaClient';
import dayjs from 'dayjs';

interface ICreateTrainingSheetsUseCase {
  name: string,
  workoutType: string,
  duration: number,
  exerciseId: string,
  routineId: string,
}

export class CreateTrainingSheetsUseCase {
  async execute({
    name,
    workoutType,
    duration,
    exerciseId,
    routineId,
  }: ICreateTrainingSheetsUseCase) {

    // Salvar a rotina
    const trainingSheets = await prisma.trainingSheet.create({
      data: {
        name,
        workoutType,
        duration,
        exerciseId,
        routineId,
      },
    });
    return trainingSheets;
  }
}
