import { prismaClient } from "../../prisma";

interface DetailRequest{
  orderId: string;
}

export class DetailOrderService{
  async execute({ orderId }: DetailRequest){
    const orders = await prismaClient.item.findMany({
      where:{
        order_id: orderId
      },
      include:{
        product: true,
        order: true
      }
    })
    return orders
  }
}