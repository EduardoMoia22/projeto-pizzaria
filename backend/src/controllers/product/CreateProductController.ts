import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

export class CreateProductController{
  async handle(req: Request, res: Response){
    const { name, price, description, categoryId } = req.body;

    const createProductService = new CreateProductService();

    if(!req.file){
      throw new Error("error upload file")
    }else{
      
      const { filename: banner, originalname } = req.file;
      
      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        categoryId
      })
      return res.json(product)
    }
  }
}