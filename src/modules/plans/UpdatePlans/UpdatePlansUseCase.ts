import { prisma } from "../../../database/prismaClient";

interface IUpdatePlans {
  id,
  name,
  duration,
  price,
  createdAt
}

export class UpdatePlansUseCase {
  async execute({
    id,
    name,
    duration,
    price,
    createdAt
  }: IUpdatePlans) {

    // Salvar o plano
    const plan = await prisma.plan.update({
      where: {
        id
      },
      data: {
        id,
        name,
        duration,
        price,
        createdAt
      },
    });

    console.log(`O plano com id ${id} foi atualizado com sucesso!`);

    return plan;
  }
}
