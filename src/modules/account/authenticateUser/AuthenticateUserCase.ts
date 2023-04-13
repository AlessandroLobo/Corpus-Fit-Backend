import { prisma } from "../../../database/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateUserUser {
  email: string;
  password: string;
}

export class AuthenticateUserCase {
  async execute({ email, password }: IAuthenticateUserUser) {
    // Receiver username, password

    // Verify an username as registered
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if (!user) {
      throw new Error('Username or password invalid')
    }

    // Verify password
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Username or password invalid')
    }

    // Generate a token
    const token = sign({ email }, '46c3931c535d0f1d166026fb1c14550aef5315ad', {
      subject: user.id,
      expiresIn: '7d'
    })
    return token
  }
} 