import { prisma } from "../../../database/prismaClient";

export class ListPlansUseCase {
  async execute() {
    const plans = await prisma.plan.findMany();

    return plans;
  }
}
