import { prisma } from "../../../../database/prismaClient";

interface FindUserUseCaseProps {
  id: string;
}

export class FindUserUseCase {
  async execute({ id }: FindUserUseCaseProps) {

    const student = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        Plan: true // inclui os dados do plano relacionado
      }
    });

    return student;
  }
}
