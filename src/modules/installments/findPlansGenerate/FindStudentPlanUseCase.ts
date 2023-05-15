import { prisma } from "../../../database/prismaClient";

interface IFindStudentPlanUseCase {
  id: string;
}

export class FindStudentPlanUseCase {
  async execute({ id }: IFindStudentPlanUseCase) {
    console.log(id)
    const studentPlan = await prisma.studentPlan.findMany({
      where: {
        studentId: id,
      },
    });
    console.log('StudentPlan--', studentPlan)
    return studentPlan;
  }
}
