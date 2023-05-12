import { prisma } from "../../../database/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateUserUser {
  email: string;
  password: string;
}

export class AuthenticateUserCase {
  async execute({ email, password }: IAuthenticateUserUser) {
    const student = await prisma.student.findFirst({
      where: {
        email
      }
    })

    if (!student) {
      throw new Error('Username or password invalid')
    }

    // Verify password
    const passwordMatch = await compare(password, student.password)

    if (!passwordMatch) {
      throw new Error('Username or password invalid')
    }

    // Generate a token
    const token = sign({ email }, '46c3931c535d0f1d166026fb1c14550aef5315ad', {
      subject: student.id,
      expiresIn: '7d'
    })
    return token
  }
} 