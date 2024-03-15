import prisma from "@/db/client";

type CategoryParams = {
  giftId?: string;
};

export async function getCategory() {
  try {
    const category = await prisma.category.findMany();
    //console.log("Gift categories from database:", category)

    if (!category) return null;

    return category;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
