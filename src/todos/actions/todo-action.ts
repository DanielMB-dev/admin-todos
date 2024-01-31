'use server'

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

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
): Promise<Todo> => {
  const todo = await prisma.todo.create({
    data: { description, complete },
  });
  revalidatePath("/dashboard/server-actions");
  return todo;
};

export const deleteTodo = async ()=> {
  const deleted = await prisma.todo.deleteMany({ where: { complete: true } });
  revalidatePath("/dashboard/server-actions");
  return deleted
};