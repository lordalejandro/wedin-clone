import prisma from "@/app/utils/db";

type GiftListsParams = {
  giftListId?: string;
};

export async function getGiftLists() {
  try {
    const giftLists = await prisma.category.findMany();

    if (!giftLists) return null;

    return giftLists;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
