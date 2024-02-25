const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        const categories = [
            { name: "Marketing" },
            { name: "Meeting" },
            { name: "Production" },
            { name: "Dev" },
            { name: "Dashboard Design" },
            { name: "UI Design" },
        ];

        await prisma.category.createMany({
            data: categories,
        });

        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
    }
}

seedDatabase();
