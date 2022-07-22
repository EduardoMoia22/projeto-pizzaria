import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

export class RemoveItemController{
  async handle(req: Request, res: Response){
    const itemId = req.query.itemId as string

    const removeItemService = new RemoveItemService()

    const removeItem = await removeItemService.execute({
      itemId
    })

    return res.json(removeItem)
  }
}