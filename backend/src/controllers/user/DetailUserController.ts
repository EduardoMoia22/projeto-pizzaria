import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController{
  async handle(req: Request, res: Response){
    const userId = req.userId

    const detailUserService = new DetailUserService()
    
    const detail = await detailUserService.execute(userId)

    return res.json(detail)
  }
}