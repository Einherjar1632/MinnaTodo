import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { groupId, groupName } = await request.json();

        if (!groupId || !groupName) {
            return NextResponse.json({ error: 'Group ID and new name are required' }, { status: 400 });
        }

        const updatedGroup = await prisma.group.update({
            where: { uuid: groupId },
            data: {
                groupName: groupName,
                lastUsedAt: new Date(),
            },
        });

        return NextResponse.json({ success: true, group: updatedGroup });
    } catch (error) {
        console.error('Error renaming group:', error);
        return NextResponse.json({ error: 'Failed to rename group' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
