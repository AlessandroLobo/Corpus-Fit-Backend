import { prisma } from "../../../database/prismaClient";

interface FindPlanCaseProps {
  name?: string;

}

export class FindPlanUseCase {
  async execute({ name }: FindPlanCaseProps) {
    const plans = await prisma.plan.findMany({
      where: {
        AND: [
          {
            OR: [
              { name: { contains: name || '' } },
            ]
          }
        ]
      },
      orderBy: {
        name: 'asc'
      },
    });

    return { plans };
  }

}
