import { prisma } from "../../../database/prismaClient";

interface IDeleteStudentRoutineUseCase {
  id: string;
}
export class DeleteStudentRoutineUseCase {
  async delete(id: string) {
    const trainingSheets = await prisma.studentRoutine.delete({
      where: {
        id,
      },
    });
    return trainingSheets;
  }
}
