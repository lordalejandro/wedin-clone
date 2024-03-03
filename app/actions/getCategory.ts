import prisma from "@/app/utils/db";

type CategoryParams = {
  giftId?: string;
};

export async function getCategory() {
  try {
    const category = await prisma.category.findMany();
    console.log("Gift Lists from database:", category)

    if (!category) return null;

    return category;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
