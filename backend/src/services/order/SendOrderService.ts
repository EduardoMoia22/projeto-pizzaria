import { prismaClient } from "../../prisma";

interface OrderRequest{
  orderId: string;
}

export class SendOrderService{
  async execute({ orderId }: OrderRequest){
    const sendOrder = await prismaClient.order.update({
      where:{
        id: orderId
      },
      data:{
        draft: false
      }
    })

    return sendOrder
  }
}