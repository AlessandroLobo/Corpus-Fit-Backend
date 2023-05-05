import dayjs from "dayjs";
import { prisma } from "../../../database/prismaClient";


interface ICreatePlans {
  name: string;
  duration: number;
  price: number;
  createdAt: string;
}

export class CreatePlansUseCase {
  async execute({
    name,
    duration,
    price,
    createdAt,
  }: ICreatePlans) {

    const formattedCreatedAt = dayjs().toDate();


    // Salvar o plano
    const plan = await prisma.plan.create({
      data: {
        name,
        duration,
        price,
        createdAt: formattedCreatedAt,
      },
    });
    return plan;
  }
}
