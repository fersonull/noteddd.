"use server";

import { auth } from "@/app/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function createNotebook(formData: FormData) {
  const session = await auth();
  const rawTitle = formData.get("title") as string;

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const notebook = await prisma.notebook.create({
    data: {
      userId: session.user.id,
      title: rawTitle,
      content: [], // Start empty
    },
  });

  redirect(`/notebooks/${notebook.id}`);
}
