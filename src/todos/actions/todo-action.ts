'use server'

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/authOptions";



const sleep = (seconds: number) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, seconds*1000)
    })
}

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    
    await sleep(3)
    const todo = await prisma.todo.findFirst({ where: { id } })
    
    if (!todo) {
        throw new Error("Id not found")
    } 
        const updatedTodo = await prisma.todo.update({
          where: {
            id,
          },
          data: { complete },
        });
    
    revalidatePath('/dashboard/server-actions')
    return updatedTodo

}

export const createTodo = async (
  description: string,
  complete?: boolean
): Promise<Todo | null> => {
   const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  let todo: Todo
  if (userId) {
      todo = await prisma.todo.create({
      data: { description, complete, userId },
    });
    revalidatePath("/dashboard/server-actions");  
      return todo;
  }
return null

};

export const deleteTodo = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const deleted = await prisma.todo.deleteMany({ where: { complete: true, userId } });
  revalidatePath("/dashboard/server-actions");
  console.log(deleted)
  return deleted
};