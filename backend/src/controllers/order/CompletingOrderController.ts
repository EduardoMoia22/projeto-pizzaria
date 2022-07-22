import { Request, Response } from "express";
import { CompletingOrderService } from "../../services/order/CompletingOrderService";

export class CompletingOrderController{
  async handle(req: Request, res: Response){
    const { orderId } = req.body

    const completingOrderService = new CompletingOrderService()

    const completingOrder = await completingOrderService.execute({
      orderId
    })

    return res.json(completingOrder)
  }
}