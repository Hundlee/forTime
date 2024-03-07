import { db } from "@/app/_lib/prisma";
import CardProject from "./cardProject";
import { auth } from "@/app/_services/auth";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/app/_components/ui/card";
import ProjectNoSession from "./project-no-session";

const CarouselProject = async () => {
    const projects = await db.project.findMany({});
    const session = await auth();

    return (
        <div className="w-full flex">
            {session ? (
                <div className="w-full flex">
                    {projects.map((project: any) => (
                        <CardProject cardProject={project} key={project} />
                    ))}
                </div>
            ) : (
                <ProjectNoSession />
            )}
        </div>
    );
};

export default CarouselProject;
