import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateUserRequest {
    groupId: number;
    nickname: string;
}

export interface CreateUserResponse {
    user: {
        id: number;
        groupId: number;
        nickname: string;
        group: {
            id: number;
            groupName: string;
            uuid: string;
        };
    };
}

export async function POST(request: Request) {
    try {
        const { groupId, nickname }: CreateUserRequest = await request.json();

        const user = await prisma.user.create({
            data: {
                groupId: parseInt(groupId.toString()),
                nickname,
            },
            include: {
                group: true,
            },
        });

        const response: CreateUserResponse = { user };

        return NextResponse.json(response, { status: 201 });
    } catch (error) {
        console.error('ユーザー作成エラー:', error);
        return NextResponse.json({ error: 'ユーザーの作成に失敗しました' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
