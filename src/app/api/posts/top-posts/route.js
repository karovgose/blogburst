import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const topViewedPosts = await prisma.post.findMany({
      orderBy: { views: 'desc' },
      take: 3,
      include: {
        user: true,
      },
    });

    return new NextResponse(
      JSON.stringify({ topViewedPosts }, { status: 200 })
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};
