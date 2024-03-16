import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/db/client'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("hello");
  console.log(req.method);
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { giftId, wishListId } = req.body;

  if (!giftId || !wishListId) {
    return res.status(400).json({ message: 'Gift ID and Wishlist ID are required' });
  }

  try {
    const result = await prisma.wishList.update({
      where: { id: wishListId },
      data: {
        gifts: {
          connect: { id: giftId },
        },
      },
    });
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return error;
  }
}
