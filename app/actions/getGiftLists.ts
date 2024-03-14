import prisma from "@/app/utils/db";

export async function getGiftLists() {
  try {
    const giftLists = await prisma.giftList.findMany();

    if (!giftLists) return null;

    return giftLists;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
