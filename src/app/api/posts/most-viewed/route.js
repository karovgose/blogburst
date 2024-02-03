import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const mostViewedPost = await prisma.post.findFirst({
      orderBy: { views: 'desc' },
      include: {
        user: true,
      },
    });
    return new NextResponse(
      JSON.stringify({ mostViewedPost }, { status: 200 })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};
