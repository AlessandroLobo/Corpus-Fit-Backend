import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcryptjs'
import dayjs from 'dayjs';

interface ICreateUsers {
  name: string;
  cpf: string;
  email: string;
  password: string;
  birthDate: string; // Alterado para string
  weight: string;
  gender: string;
  phone: string;
  CEP: string;
  city: string;
  address: string;
  number: string;
  state: string;
  planId: string;
  createdAt: string; // Alterado para string
}

export class CreateUsersUseCase {
  async execute({
    name,
    cpf,
    email,
    password,
    birthDate,
    weight,
    gender,
    phone,
    CEP,
    city,
    address,
    number,
    state,
    planId,
    createdAt,
  }: ICreateUsers) {
    // Validar se o usuário existe
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    // Validar se o CPF já está cadastrado
    const existingCpf = await prisma.user.findFirst({
      where: {
        cpf,

      },
    });

    console.log(existingCpf)

    if (existingCpf) {
      throw new Error('Cpf já cadastrado');
    }

    // Criptografar a senha
    const passwordHash = await hash(password, 10);

    // Converter as strings de data em objetos Date válidos e formatá-las como strings ISO 8601
    const formattedBirthDate = dayjs(birthDate, 'DD/MM/YYYY').toDate();
    const formattedCreatedAt = dayjs(createdAt, 'DD/MM/YYYY HH:mm:ss').toDate();

    // Verificar se o plano existe antes de salvar o usuário
    const plan = await prisma.plan.findUnique({
      where: {
        id: planId,
      },
    });

    if (!plan) {
      throw new Error('Plan not found');
    }


    // Salvar o usuário
    const user = await prisma.user.create({
      data: {
        name,
        cpf,
        email,
        password: passwordHash,
        birthDate: formattedBirthDate,
        weight,
        gender,
        phone,
        CEP,
        city,
        address,
        number,
        state,
        planId,
        createdAt: formattedCreatedAt,
      },
    });

    return user;
  }
}
