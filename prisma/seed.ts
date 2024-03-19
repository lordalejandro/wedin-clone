// const { PrismaClient } = require('@prisma/client');
import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

type UserMapType = {
  [email: string]: any;
};

async function main() {
  const categoriesData = seedData.categories;
  const giftListsData = seedData.giftList;
  const giftsData = seedData.gifts;
  const usersData = seedData.users;

  try {
    for (const category of categoriesData) {
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
      const categoryData = categoriesData.find(category => {
        return category['id'] === gift.categoryId;
      });

      const giftListData = giftListsData.find(list => {
        return list['id'] === gift.giftListId;
      });

      if (categoryData === undefined) {
        console.error(`Category with ID ${gift.categoryId} not found`);
        return;
      }

      if (giftListData === undefined) {
        console.error(`Gift List with ID ${gift.giftListId} not found`);
        return;
      }

      const category = await prismaClient.category.findFirst({
        where: { name: categoryData['name'] },
      });

      const giftList = await prismaClient.giftList.findFirst({
        where: { name: giftListData['name'] },
      });

      if (category === null) {
        console.error(`Category with ID ${gift.categoryId} not found in db`);
        return;
      }

      if (giftList === null) {
        console.error(`Gift List with ID ${gift.giftListId} not found in db`);
        return;
      }

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

    let usersMap: UserMapType = {};
    for (const user of usersData) {
      const createdUser = await prismaClient.user.create({
        data: user,
      });
      usersMap[user.email] = createdUser;
    }

    for (const wedding of seedData.weddings) {
      const bride = usersMap[seedData.users[0].email];
      const groom = usersMap[seedData.users[1].email];

      const createdWedding = await prismaClient.wedding.create({
        data: {
          url: wedding.url,
          date: new Date(wedding.date),
          location: wedding.location,
          brideId: bride.id,
          groomId: groom.id,
        },
      });

      const wishlist = await prismaClient.wishList.create({
        data: {
          description: seedData.wishLists[0].description,
          weddingId: createdWedding.id,
        },
      });

      await prismaClient.wedding.update({
        where: { id: createdWedding.id },
        data: {
          wishListId: wishlist.id,
        },
      });
    }

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
