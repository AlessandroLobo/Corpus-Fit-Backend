import { prisma } from '../../../database/prismaClient';
import dayjs from 'dayjs';

interface ICreateWorkoutRoutinesUseCase {
  name: string;
  workoutType?: string;
  objective: string;
  observation: string;
  startDate: Date;
  endDate: Date;
  createdAt?: Date;
}

export class CreateWorkoutRoutinesUseCase {
  async execute({
    name,
    workoutType,
    objective,
    observation,
    startDate,
    endDate,
    createdAt,
  }: ICreateWorkoutRoutinesUseCase) {

    const formattedCreatedAt = dayjs().toDate();
    // Salvar a rotina
    const workoutRoutines = await prisma.routine.create({
      data: {
        name,
        workoutType,
        objective,
        observation,
        startDate,
        endDate,
        createdAt: formattedCreatedAt,
      },
    });
    console.log(workoutRoutines)
    return workoutRoutines;
  }
}
