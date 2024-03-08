"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface SaveProjectParams {
    userId: string;
    name: string;
    description: string;
}

export const saveProject = async (params: SaveProjectParams) => {
    await db.project.create({
        data: {
            userId: params.userId,
            name: params.name,
            description: params.description,
        },
    });

    revalidatePath("/");
    revalidatePath("/project/[id]");
};
