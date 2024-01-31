import { NewTodo } from "@/components";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server TODOS",
  description: "Server TODOS",
};
export const dynamic = "force-dynamic";
export const revalidate = 0

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <div className="w-100 p-5 mx-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
