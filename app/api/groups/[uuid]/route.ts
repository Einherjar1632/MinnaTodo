import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// レスポンスの型定義
export interface GroupResponse {
  id: number;
  groupName: string;
  uuid: string;
  createdAt: string;
  lastUsedAt: string;
}

export async function GET(request: Request, props: { params: Promise<{ uuid: string }> }) {
  const params = await props.params;
  const uuid = params.uuid;

  try {
    const group = await prisma.group.findUnique({
      where: { uuid: uuid },
      select: {
        id: true,
        groupName: true,
        uuid: true,
        createdAt: true,
        lastUsedAt: true,
      }
    });

    if (!group) {
      return NextResponse.json({ error: 'グループが見つかりません' }, { status: 404 });
    }

    const response: GroupResponse = {
      id: group.id,
      groupName: group.groupName,
      uuid: group.uuid,
      createdAt: group.createdAt.toISOString(),
      lastUsedAt: group.lastUsedAt.toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('グループの取得中にエラーが発生しました:', error);
    return NextResponse.json({ error: '内部サーバーエラー' }, { status: 500 });
  }
}
