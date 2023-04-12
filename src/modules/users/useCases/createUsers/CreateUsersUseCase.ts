import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcryptjs'
interface ICreateUsers {
  username: string
  password: string
  expiration_date: Date
}

export class CreateUsersUseCase {
  async execute({ password, username, expiration_date }: ICreateUsers) {
    // Validar se o usuário existe
    const userAlreadyExists = await prisma.users.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    // Criptografar a senha
    const passwordHash = await hash(password, 10)

    // salvar o usuário
    const user = await prisma.users.create({
      data: {
        username,
        password: passwordHash,
        expiration_date,
      },
    })
    return user
  }
}
