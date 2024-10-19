import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { groupId: string } }
) {
  try {
    const group = await prisma.group.findUnique({
      where: { uuid: params.groupId },
    });

    if (!group) {
      return NextResponse.json({ error: 'グループが見つかりません' }, { status: 404 });
    }

    return NextResponse.json({ groupName: group.groupName });
  } catch (error) {
    console.error('グループの取得中にエラーが発生しました:', error);
    return NextResponse.json({ error: 'グループの取得に失敗しました' }, { status: 500 });
  }
}
