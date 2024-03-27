import bcrypt from 'bcrypt';
import prisma from '@/db/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, userType } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        userType,
      },
    });

    return NextResponse.json({
      id: user.id,
      email: user.email,
      userType: user.userType,
    });

  } catch (error: any) {
    if (error.code === 'P2002') {
      return new Response(JSON.stringify({ error: "Email already in use" }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
