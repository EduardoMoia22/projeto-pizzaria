import { prismaClient } from "../../prisma";

interface RemoveItemRequest{
  itemId: string;
}

export class RemoveItemService{
  async execute({ itemId }: RemoveItemRequest){
    const removeItem = await prismaClient.item.delete({
      where:{
        id: itemId
      }
    })

    return removeItem
  }
}