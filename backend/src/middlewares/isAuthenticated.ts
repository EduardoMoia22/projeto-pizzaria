import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload{
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
){

  //Receber o token
  const authToken = req.headers.authorization

  if(!authToken){
    return res.status(401).end()
  }

  //.split(" ") => para pegar strings que estão entre espaços e a virgula no primeiro item do array é para ignorar a primeira string
  const [, token] = authToken.split(" ")

  try {
    //Validar o token
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload

    req.userId = sub

    return next()

  } catch (err) {
    return res.status(401).end()
  }
}