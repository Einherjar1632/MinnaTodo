import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function DELETE(request: Request) {
    try {
        const { todoListId } = await request.json();

        if (!todoListId) {
            return NextResponse.json({ error: 'TodoList ID is required' }, { status: 400 });
        }

        const deletedTodoList = await prisma.todoList.update({
            where: { id: parseInt(todoListId) },
            data: { isDeleted: true }
        });

        if (!deletedTodoList) {
            return NextResponse.json({ error: 'TodoList not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'TodoList deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting TodoList:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
