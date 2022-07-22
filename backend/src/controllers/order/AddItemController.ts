import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

export class AddItemController{
  async handle(req: Request, res: Response){
    const { orderId, productId, amount } = req.body

    const addItemService = new AddItemService()

    const orderItem = await addItemService.execute({
      orderId,
      productId,
      amount
    })
    
    return res.json(orderItem)
  }
}