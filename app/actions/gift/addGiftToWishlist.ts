import prisma from "@/app/utils/db"; 

type AddGiftToWishlistParams = {
  giftId: string;
  wishListId: string;
};

export async function addGiftToWishlist({ giftId, wishListId }: AddGiftToWishlistParams) {
  try {
    const updatedWishList = await prisma.wishList.update({
      where: { id: wishListId },
      data: {
        gifts: {
          connect: { id: giftId }, 
        },
      },
    });

    return updatedWishList;
  } catch (error: any) {
    console.error("Error adding gift to wishlist:", error.message);
    throw error;
  }
}
