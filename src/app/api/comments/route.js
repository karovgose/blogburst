import { getAuthSession } from '@/utils/auth';
import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get('postSlug');

  try {
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: {
        user: true,
      },
    });

    return new NextResponse(JSON.stringify({ comments }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'Not Authenticated!' }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify({ comment }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};

export const DELETE = async (req) => {
  const { id } = await req.json();

  try {
    await prisma.comment.delete({ where: { id } });
    return new NextResponse(
      JSON.stringify(
        { message: 'Comment deleted successfully' },
        { status: 200 }
      )
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};

export const PUT = async (req) => {
  try {
    const { id, desc } = await req.json();

    if (!id) {
      throw new Error('Comment ID is missing');
    }

    const updatedComment = await prisma.comment.update({
      where: { id },
      data: { desc },
    });

    console.log('Comment updated successfully:', updatedComment);

    return new NextResponse(
      JSON.stringify({ comment: updatedComment }, { status: 200 })
    );
  } catch (error) {
    console.error('Error updating comment:', error);

    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, { status: 500 })
    );
  }
};
