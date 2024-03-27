import prisma from '@/db/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, partnerFirstName, partnerLastName, partnerEmail, weddingDate, weddingUrl } = req.body;

    // Start a transaction to ensure both operations complete successfully
    const transaction = await prisma.$transaction([
      prisma.user.update({
        where: {
          // You need to specify the correct identifier for the current user
        },
        data: {
          name: firstName,
          lastName,
          weddingDate,
          weddingUrl,
        },
      }),
      prisma.user.create({
        data: {
          name: partnerFirstName,
          lastName: partnerLastName,
          email: partnerEmail,
          weddingDate,
          weddingUrl,
          // Any other default values for the second user
        },
      }),
    ]);

    if (transaction) {
      res.status(200).json({ message: 'Users updated and created successfully.' });
    } else {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
