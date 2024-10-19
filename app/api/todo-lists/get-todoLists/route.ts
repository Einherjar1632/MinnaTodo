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
        listName: true
      }
    });

    if (todoLists.length === 0) {
      return NextResponse.json({ error: 'グループが見つかりません、またはTodoListが存在しません' }, { status: 404 });
    }

    // TodoListの名前のみを配列として返す
    const todoListNames = todoLists.map(list => list.listName);

    return NextResponse.json(todoListNames);
  } catch (error) {
    console.error('TodoListの取得中にエラーが発生しました:', error);
    return NextResponse.json({ error: 'TodoListの取得に失敗しました' }, { status: 500 });
  }
}
