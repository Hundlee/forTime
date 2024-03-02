"use server";

import { db } from "@/app/_lib/prisma";
import { endOfDay, startOfDay } from "date-fns";

export const getDayTask = async (taskId: string, date: Date) => {
    const createTask = await db.createTask.findMany({
        where: {
            projectId: taskId,
            date: {
                lte: endOfDay(date),
                gte: startOfDay(date),
            },
        },
    });

    return createTask;
};
