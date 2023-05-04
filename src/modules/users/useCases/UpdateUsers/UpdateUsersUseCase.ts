import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcryptjs'
import dayjs from 'dayjs';
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

// Adiciona os plugins de UTC e timezone ao Day.js
dayjs.extend(utc);
dayjs.extend(timezone);

interface ICreateUsers {
  id: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  birthDate: string;
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

export class UpdateUsersUseCase {
  async execute({
    id,
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
    console.log('PlanId=====', planId);
    // Validar se o usuário existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    console.log('Data de entrada', birthDate)

    const dataStr: string = birthDate;

    const year = parseInt(dataStr.slice(4));
    const month = parseInt(dataStr.slice(2, 4)) - 1;
    const day = parseInt(dataStr.slice(0, 2));

    let dataObj = new Date(year, month, day);
    const ultimoDia = new Date(year, month + 1, 0).getDate();

    if (day > ultimoDia) {
      dataObj.setDate(ultimoDia);
    }

    const dataFormatada: string = `${dataObj.getFullYear()}${String(dataObj.getMonth() + 1).padStart(2, '0')}${String(dataObj.getDate()).padStart(2, '0')}`;

    const birthdateFormated = dayjs(dataFormatada, 'YYYYMMDD').utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

    // ---------------------

    // Criptografar a senha
    const passwordHash = await hash(password, 10);

    console.log('Data de saida', birthdateFormated); // Output: "1974-09-29T21:00:00Z"

    const formattedCreatedAt = dayjs().toDate();

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
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        name,
        cpf,
        email,
        password: passwordHash,
        birthDate: birthdateFormated,
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
