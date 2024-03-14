import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function main() {
  const categoryData = seedData.categories;
  const giftListsData = seedData.giftLists;
  const giftsData = seedData.gifts;

  try {
    for (const category of categoryData) {
      await prismaClient.category.create({
        data: {
          name: category.name,
        },
      });
    }

    for (const giftList of giftListsData) {
      await prismaClient.giftList.create({
        data: {
          name: giftList.name,
          description: giftList.description,
          isDefault: giftList.isDefault,
          quantity: giftList.quantity,
          totalPrice: giftList.totalPrice,
        },
      });
    }

    for (const gift of giftsData) {
      const category = categoryData.find((category) => {
        return category["id"] === gift.categoryId;
      });

      if (category === null || category === undefined) {
        console.error(`Category with ID ${gift.categoryId} not found`);
        return;
      }

      const giftList = giftListsData.find((list) => {
        return list["id"] === gift.giftListId;
      });

      if (giftList === null || giftList === undefined) {
        console.error(`Gift List with ID ${gift.giftListId} not found`);
        return;
      }

      const dbCategory = await prismaClient.category.findFirst({
        where: { name: category["name"] },
      });

      if (dbCategory === null || dbCategory === undefined) {
        console.error(`Category with naame ${category["name"]} not found`);
        return;
      }

      const dbGiftList = await prismaClient.giftList.findFirst({
        where: { name: giftList["name"] },
      });

      if (dbGiftList === null || dbGiftList === undefined) {
        console.error(`Gift List with name ${giftList["name"]} not found`);
        return;
      }

      await prismaClient.gift.create({
        data: {
          name: gift.name,
          description: gift.description,
          isDefault: gift.isDefault,
          giftListId: dbGiftList.id,
          price: gift.price.toString(),
          categoryId: dbCategory.id,
        },
      });
    }

    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
