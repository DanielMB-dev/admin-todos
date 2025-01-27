import { authOptions } from "@/app/auth/authOptions";
import { NewTodo } from "@/components";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { Todo } from "@prisma/client";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "rest TODOS",
  description: "rest TODOS",
};

/* export const dynamic = 'force-dynamic'
export const revalidate = 0; */

export default async function RestTodosPage() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
  let todos: Todo[] = [];
  if (userId) {
    todos = await prisma.todo.findMany({
      where: { userId },
      orderBy: { description: "asc" },
    });
  }

  return (
    <div>
      <div className="w-100 p-5 mx-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
