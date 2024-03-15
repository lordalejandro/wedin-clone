import prisma from "@/db/client";

type GiftListsParams = {
  giftListId?: string;
};

export async function getGiftLists() {
  try {
    const giftLists = await prisma.giftList.findMany();
    //console.log("Gift Lists from database:", giftLists)

    if (!giftLists) return null;

    return giftLists;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
