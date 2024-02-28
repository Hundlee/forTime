"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/app/_components/ui/card";
import { User } from "lucide-react";
import { Project } from "@prisma/client";
import { useRouter } from "next/navigation";

interface CardProjectProps {
    cardProject: Project;
}

const CardProject = ({ cardProject }: CardProjectProps) => {
    const router = useRouter();

    const handleProjectClick = () => {
        router.push(`/project/${cardProject.id}`);
    };

    return (
        <div className="px-5 my-4">
            <Card
                className="w-[90vw]  rounded-[35px] flex flex-col items-start border-none justify-between shadow-lg"
                onClick={handleProjectClick}
            >
                <CardHeader className="flex flex-row items-center">
                    <div className="p-2 bg-indigo-900 mr-2 rounded-lg">
                        <User />
                    </div>
                    <h3>{cardProject.name}</h3>
                </CardHeader>
                <CardContent>
                    <h2 className="text-xl py-10">{cardProject.description}</h2>
                </CardContent>
                <CardFooter>
                    <h3 className="text-sm">October 2020</h3>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardProject;
