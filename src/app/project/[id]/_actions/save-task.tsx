"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface SaveTaskParams {
    projectId: string;
    taskId: string;
    categoryId: string;
    userId: string;
    date: Date;
    name: string;
    description: string;
    startTime: string | Date;
    endTime: string | Date;
}

export const saveTask = async (params: SaveTaskParams) => {
    await db.createTask.create({
        data: {
            projectId: params.projectId,
            taskId: params.taskId,
            categoryId: params.categoryId,
            userId: params.userId,
            date: params.date,
            name: params.name,
            description: params.description,
            startTime: params.startTime,
            endTime: params.endTime,
        },
    });

    revalidatePath("/");
    revalidatePath("/project/[id]");
};
