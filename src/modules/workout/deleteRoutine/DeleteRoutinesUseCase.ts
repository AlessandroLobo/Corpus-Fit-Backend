import { prisma } from "../../../database/prismaClient";

interface IDeleteRoutinesUseCase {
  id: string;
}

export class DeleteRoutinesUseCase {
  async delete(id: string) {
    try {
      const routines = await prisma.routine.delete({
        where: {
          id,
        },
      });
      return routines;
    } catch (error) {
      if (error.code === 'P2003' && error.meta?.field_name === 'routineId') {
        // Retorne a mensagem de erro personalizada
        const errorMessage = 'Erro ao excluir a rotina: a restrição de chave estrangeira falhou.';
        console.error(errorMessage);
        return { error: errorMessage };
      }
      // Trate outros erros aqui, se necessário
      console.error("Ocorreu um erro ao excluir as rotinas:", error);
      throw error;
    }
  }
}
