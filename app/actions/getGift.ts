import prisma from "@/app/utils/db";

type GiftParams = {
  giftId?: string;
};

export async function getGift() {
  try {
    const gift = await prisma.gift.findMany();
    console.log("Gift Lists from database:", gift)

    if (!gift) return null;

    return gift;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
