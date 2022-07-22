import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

export class SendOrderController{
  async handle(req: Request, res: Response){
    const { orderId } = req.body

    const sendOrderService = new SendOrderService()

    const sendOrder = await sendOrderService.execute({
      orderId
    })

    return res.json(sendOrder)
  }
}