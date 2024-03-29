import prisma from "@/db/client";

export async function getCategory() {
  try {
    const category = await prisma.category.findMany();

    if (!category) return null;

    return category;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
