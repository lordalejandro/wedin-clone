import prisma from "@/app/utils/db";

export type GiftParams = {
  category?: string;
};

export async function getGift({ searchParams }: { searchParams?: GiftParams }) {
  try {

    let query: any = {};
    const { category } = searchParams ?? {};

    if (category) {
      query.category = category;
    }

    const gifts = await prisma.gift.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });  

    console.log("Gifts from database:", gifts)

    if (!gifts) return null;

    return gifts;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
