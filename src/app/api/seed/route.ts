import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany()
    await prisma.todo.createMany({
      data: [
        {
          description: "piedra de fuego",
          complete: true,
        },
        {
          description: "piedra de agua",
          complete: false,
        },

        {
          description: "piedra de tierra",
          complete: false,
        },

        {
          description: "piedra de aire",
          complete: true,
        },
      ],
    });
  return NextResponse.json({
    message: "seed executed",
  });
}

