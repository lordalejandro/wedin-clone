import prisma from '@/db/client';

export async function getWishListByWeddingId(weddingId: string | undefined) {
  try {
    const wishList = await prisma.wishList.findFirst({
      where: { weddingId: weddingId },
    });

    if (!wishList) return null;

    return wishList;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
