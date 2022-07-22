import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../prisma";

interface AuthRequest{
  email: string;
  password: string;
}

export class AuthUserService{
  async execute({ email, password }: AuthRequest){
    
    //Verificar se o email existe
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(!user){
      throw new Error("User/password incorrect")
    }

    //Verificando se as senhas são iguais
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("User/password incorrect")
    }

    //Gerar um token JWT e retornar para o usuario 
    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )
    
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }
  }
}