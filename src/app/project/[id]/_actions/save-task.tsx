"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface SaveTaskParams {
    projectId: string;
    categoryId: string;
    userId: string;
    date: Date;
    name: string;
    description: string;
}

export const saveTask = async (params: SaveTaskParams) => {
    await db.task.create({
        data: {
            projectId: params.projectId,
            categoryId: params.categoryId,
            userId: params.userId,
            date: params.date,
            name: params.name,
            description: params.description,
        },
    });

    revalidatePath("/");
    revalidatePath("/project/[id]");
};
