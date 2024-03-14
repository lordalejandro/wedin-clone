import prisma from "@/app/utils/db";

type WishListParams = {
  giftId: string
  weddingId: string
  wishListId: string
};

export async function getWishList() {
  try {
    const wishList = await prisma.wishList.findMany();
    //console.log("Gift Lists from database:", giftLists)

    if (!wishList) return null;

    return wishList;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
