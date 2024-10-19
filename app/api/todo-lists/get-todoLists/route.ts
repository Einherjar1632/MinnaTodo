import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const groupUuid = searchParams.get('groupUuid');

  if (!groupUuid) {
    return NextResponse.json({ error: 'グループUUIDが必要です' }, { status: 400 });
  }

  try {
    const todoLists = await prisma.todoList.findMany({
      where: {
        group: { uuid: groupUuid },
        isDeleted: false
      },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        listName: true
      }
    });

    if (todoLists.length === 0) {
      return NextResponse.json({ error: 'グループが見つかりません、またはTodoListが存在しません' }, { status: 404 });
    }

    return NextResponse.json(todoLists);
  } catch (error) {
    console.error('TodoListの取得中にエラーが発生しました:', error);
    return NextResponse.json({ error: 'TodoListの取得に失敗しました' }, { status: 500 });
  }
}
