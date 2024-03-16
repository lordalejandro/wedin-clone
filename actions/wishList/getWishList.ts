import prisma from '@/db/client';

export async function getWishList() {
  try {
    const wishList = await prisma.wishList.findMany();

    if (!wishList) return null;

    return wishList;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
