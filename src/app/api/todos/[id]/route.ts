import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import { boolean, object, string } from 'yup'


interface Args {
    params: {
        id: string
    }
}

async function FindOne(id: string) {
 const todo =  await prisma.todo.findFirst({
    where: {
      id,
    },
 });
   if (!todo) {
     return null
  }
  return todo
}

export async function GET(request: Request, { params }: Args) {
  const { id } = params;
    const todo = await FindOne(id)
   
  return NextResponse.json(todo);
}


const putSchema = object({
  description: string().optional(),
  complete: boolean().optional(),
});
export async function PUT(req: Request, { params }: Args) {
  try {
    const { id } = params;
    const todo =await FindOne(id);
    if (!todo) {
      return NextResponse.json({
        message: `todo con id: ${id} no existe`,
      });
    }
    const { description, complete } = await putSchema.validate(
      await req.json()
    );
    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: {description, complete}
    });

    return NextResponse.json(updatedTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}