import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcryptjs'
interface ICreateUsers {
  email: string
  password: string
  createdAt: Date
  planId?: string
}

export class CreateUsersUseCase {
  async execute({ email, password, createdAt, planId }: ICreateUsers) {
    // Validar se o usuário existe
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    // Criptografar a senha
    const passwordHash = await hash(password, 10)

    // salvar o usuário
    const user = await prisma.user.create({
      data: {
        email,
        password: passwordHash,
        createdAt,
        planId: planId?.toString() || '1',
      },
    })
    return user
  }
}
