

import dayjs from "dayjs";
import { prisma } from "../../../database/prismaClient";


interface ICreateMuscleGroupUseCase {
  name: string;
  createdAt: string;
}

export class CreateMuscleGroupUseCase {
  async execute({
    name,
    createdAt,
  }: ICreateMuscleGroupUseCase) {

    const formattedCreatedAt = dayjs().toDate();


    // Salvar o plano
    const plan = await prisma.muscleGroup.create({
      data: {
        name,
        createdAt: formattedCreatedAt,
      },
    });
    return plan;
  }
}
