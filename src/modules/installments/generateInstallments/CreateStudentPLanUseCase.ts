import dayjs from "dayjs";
import { prisma } from "../../../database/prismaClient";

interface ICreateStudentPlanUseCase {
  createdAt: string;
  dueDate: string;
  planValue: number;
  planId: string;
  studentId: string;
}

export class CreateStudentPlanUseCase {
  async execute({
    planValue,
    planId,
    studentId,
  }: ICreateStudentPlanUseCase) {

    const formattedCreatedAt = dayjs().toDate();

    const dueDate = dayjs().add(30, 'day').toDate();

    const formattedPlanValue = parseFloat(planValue.toString());

    // Salvar o plano
    const studentPlan = await prisma.studentPlan.create({
      data: {
        createdAt: formattedCreatedAt,
        dueDate: dueDate,
        planValue: formattedPlanValue,
        planId,
        studentId,
      },
    });
    return studentPlan;
  }
}
