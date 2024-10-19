import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateTodoListRequest {
    groupId: number;
    listName: string;
}

export interface CreateTodoListResponse {
    id: number;
    groupId: number;
    listName: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: CreateTodoListRequest = await request.json();
        const todoList = await prisma.todoList.create({
            data: {
                groupId: body.groupId,
                listName: body.listName,
            },
        });

        return NextResponse.json({
            id: todoList.id,
            groupId: todoList.groupId,
            listName: todoList.listName,
        } as CreateTodoListResponse, { status: 201 });
    } catch (error) {
        console.error('TodoListの作成中にエラーが発生しました:', error);
        return NextResponse.json({ error: 'TodoListの作成に失敗しました' }, { status: 500 });
    }
}
