const { PrismaClient } = require('@prisma/client');
const prismaClient = new PrismaClient();

async function main() {
  const categoryData = seedData.categories;
  const listsData = seedData.lists;
  const giftsData = seedData.gifts;
  const usersData = seedData.users;
  const weddingsData = seedData.weddings;
  const wishListsData = seedData.wishLists;

  try {
    for (const category of categoryData) {
      await prismaClient.category.create({
        data: {
          name: category.name,
        },
      });
    }

    for (const list of listsData) {
      await prismaClient.giftList.create({
        data: {
          name: list.name,
          description: list.description,
          isDefault: list.isDefault,
          quantity: list.quantity,
          totalPrice: list.totalPrice,
        },
      });
    }

    for (const gift of giftsData) {
      const categoryId = categoryData.find(category => {
        return category['id'] === gift.categoryId;
      });

      const giftListId = listsData.find(list => {
        return list['id'] === gift.giftListId;
      });

      if (categoryId === null || categoryId === undefined) {
        console.error(`Category with ID ${gift.categoryId} not found`);
        return;
      }
      if (categoryId['name'] === null || categoryId['name'] === undefined) {
        console.error(`Category with ID ${gift.categoryId} not found`);
        return;
      }

      if (giftListId === null || giftListId === undefined) {
        console.error(`Gift List with ID ${gift.giftListId} not found`);
        return;
      }
      if (giftListId['name'] === null || giftListId['name'] === undefined) {
        console.error(`Gift List with ID ${gift.giftListId} not found`);
        return;
      }

      const category = await prismaClient.category.findFirst({
        where: { name: categoryId['name'] },
      });

      const giftList = await prismaClient.giftList.findFirst({
        where: { name: giftListId['name'] },
      });

      await prismaClient.gift.create({
        data: {
          name: gift.name,
          description: gift.description,
          isDefault: gift.isDefault,
          giftListId: giftList.id,
          price: gift.price.toString(),
          categoryId: category.id,
        },
      });
    }

    let createdUsers = [];
    for (const user of usersData) {
      const createdUser = await prismaClient.user.create({
        data: {
          name: user.name,
          email: user.email,
          user_types: 'COUPLE',
        },
      });
      createdUsers.push(createdUser);
    }

    const weddingData = weddingsData[0];
    const wedding = await prismaClient.wedding.create({
      data: {
        date: new Date(weddingData.date),
        location: weddingData.location,
      },
    });

    const wishListData = wishListsData[0];
    const wishList = await prismaClient.wishList.create({
      data: {
        item: wishListData.name,
        description: 'A sample wishlist description',
        weddingId: wedding.id,
      },
    });

    console.log('Data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prismaClient.$disconnect();
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
