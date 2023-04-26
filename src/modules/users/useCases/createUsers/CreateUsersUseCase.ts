import { Plan } from '@prisma/client'
import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcryptjs'
interface ICreateUsers {
  name: string
  cpf: string
  email: string
  password: string
  birth_date: Date
  weight: string
  gender: string
  phone: string
  CEP: string
  city: string
  address: string
  number: string
  state: string
  planId?: string
  createdAt: Date
}

export class CreateUsersUseCase {
  async execute({ name, cpf, email, password, birth_date, weight, gender, phone, CEP, city, address, number, state, planId, createdAt }: ICreateUsers) {
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
        name,
        cpf,
        email,
        password: passwordHash,
        birth_date,
        weight,
        gender,
        phone,
        CEP,
        city,
        address,
        number,
        state,
        planId: planId?.toString() || '1',
        createdAt,
      },
    })
    return user
  }
}
