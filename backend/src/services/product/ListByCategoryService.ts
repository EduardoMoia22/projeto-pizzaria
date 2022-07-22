import { prismaClient } from "../../prisma";

interface ListByCategoryRequest{
  categoryId: string;
}

export class ListByCategoryService{
  async execute({ categoryId }: ListByCategoryRequest){

    const allProductsOfCategory = await prismaClient.product.findMany({
      where:{
        categoryId: categoryId
      }
    })

    return allProductsOfCategory
  }
}