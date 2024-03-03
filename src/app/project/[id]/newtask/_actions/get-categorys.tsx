"use server";

import { db } from "@/app/_lib/prisma";

const getCategorys = async () => {
    const categorys = await db.category.findMany({});

    return categorys;
};

export default getCategorys;
