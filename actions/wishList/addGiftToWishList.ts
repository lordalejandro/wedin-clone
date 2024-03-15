import prisma from '@/db/client';

export default async function addGiftToWishlist(
  giftId: string,
  wishListId: string
) {
  try {
    console.log("hello");
    const result = await prisma.wishList.update({
      where: { id: wishListId },
      data: {
        gifts: {
          connect: { id: giftId },
        },
      },
    });
    console.log("result");
    return result;
  } catch (error) {
    return error;
  }
}
