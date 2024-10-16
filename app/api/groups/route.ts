import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { v7 as uuidv7 } from 'uuid';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {

        const { groupName } = await request.json();
        const uuid = uuidv7();

        const newGroup = await prisma.group.create({
            data: {
                groupName,
                uuid,
            },
        });

        return NextResponse.json(newGroup, { status: 201 });
        
    } catch (error) {
        console.error('グループの作成中にエラーが発生しました:', error);
        return NextResponse.json({ error: 'グループの作成に失敗しました' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
