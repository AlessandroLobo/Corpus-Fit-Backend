import { prisma } from "../../../../database/prismaClient";

interface FindStudentUseCaseProps {
  id: string;
}

export class FindStudentUseCase {
  async execute({ id }: FindStudentUseCaseProps) {

    const student = await prisma.student.findUnique({
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
