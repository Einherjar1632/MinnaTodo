import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  const uuid = params.uuid;

  try {
    const group = await prisma.group.findUnique({
      where: { uuid: uuid },
      select: { groupName: true }
    });

    if (!group) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 });
    }

    return NextResponse.json({ groupName: group.groupName });
  } catch (error) {
    console.error('Error fetching group:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
