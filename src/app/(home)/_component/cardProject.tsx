import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/app/_components/ui/card";
import { db } from "@/app/_lib/prisma";
import { User } from "lucide-react";
import { Project } from "@prisma/client";

interface CardProjectProps {
    cardProject: Project;
}

export default async function CardProject({ cardProject }: CardProjectProps) {
    const projects = await db.project.findMany({});

    return (
        <div className="px-5 my-4">
            <Card className="w-[90vw]  rounded-[35px] flex flex-col items-start border-none justify-between shadow-lg">
                <CardHeader className="flex flex-row items-center">
                    <div className="p-2 bg-indigo-900 mr-2 rounded-lg">
                        <User />
                    </div>
                    <h3>{cardProject.name}</h3>
                </CardHeader>
                <CardContent>
                    <h2 className="text-xl py-10">{cardProject.name}</h2>
                </CardContent>
                <CardFooter>
                    <h3 className="text-sm">October 2020</h3>
                </CardFooter>
            </Card>
        </div>
    );
}
