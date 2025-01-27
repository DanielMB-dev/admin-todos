import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
      email: "test1@gmail.com",
      name: "usuario prueba",
      password: "hola1234",
      roles: ["user", "admin"],
      todos: {
        create: [
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
      },
    },
  });

  return NextResponse.json({
    message: "seed executed",
  });
}
