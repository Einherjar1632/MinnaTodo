import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { groupId, nickname } = await request.json();

        const user = await prisma.user.create({
            data: {
                groupId: parseInt(groupId),
                nickname,
            },
            include: {
                group: true, // グループ情報も含める
            },
        });

        return NextResponse.json({ user }, { status: 201 });
    } catch (error) {
        console.error('ユーザー作成エラー:', error);
        return NextResponse.json({ error: 'ユーザーの作成に失敗しました' }, { status: 500 });
    }
}
