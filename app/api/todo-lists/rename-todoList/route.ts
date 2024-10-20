import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request) {
    try {
        const { todoListId, newName } = await request.json();

        if (!todoListId || !newName) {
            return NextResponse.json({ error: 'TodoList ID and new name are required' }, { status: 400 });
        }

        const updatedTodoList = await prisma.todoList.update({
            where: { id: parseInt(todoListId) },
            data: { listName: newName }
        });

        if (!updatedTodoList) {
            return NextResponse.json({ error: 'TodoList not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'TodoList renamed successfully', todoList: updatedTodoList }, { status: 200 });
    } catch (error) {
        console.error('Error renaming TodoList:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
