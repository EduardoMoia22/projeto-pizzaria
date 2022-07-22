import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

export class ListByCategoryController{
  async handle(req: Request, res: Response){
    const { categoryId } = req.body

    const listByCategoryService = new ListByCategoryService()

    const listByCategory = await listByCategoryService.execute({
      categoryId
    })

    return res.json(listByCategory)
  }
}