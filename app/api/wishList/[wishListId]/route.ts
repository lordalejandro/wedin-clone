import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/db';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const wishListId = req.query.wishListId as string;
  const { giftId } = req.body;

  if (req.method === 'POST') {
    try {
      const result = await prisma.wishList.update({
        where: { id: wishListId },
        data: {
          gifts: {
            connect: { id: giftId },
          },
        },
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Unable to add gift to wishlist' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
