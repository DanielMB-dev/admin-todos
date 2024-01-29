import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";
  const skip = searchParams.get("skip") ?? "0";
  const todos = await prisma.todo.findMany({
    take: parseInt(take),
    skip: parseInt(skip),
  });
  return NextResponse.json(todos);
}

const postSchema = object({
  description: string().required(),
  complete: boolean().optional().default(false),
});
export async function POST(req: Request) {
  try {
    const { description, complete } = await postSchema.validate(
      await req.json()
    );

    const todo = await prisma.todo.create({ data: { description, complete } });

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

