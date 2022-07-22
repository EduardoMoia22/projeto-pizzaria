import { prismaClient } from "../../prisma"

interface OrderRequest{
  orderId: string
}

export class CompletingOrderService{
  async execute({ orderId }: OrderRequest){
    const completingOrder = await prismaClient.order.update({
      where:{
        id: orderId
      },
      data:{
        status: true
      }
    })

    return completingOrder
  }
}