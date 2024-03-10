import { db } from "@/app/_lib/prisma";
import CardProject from "./cardProject";
import { auth } from "@/app/_services/auth";
import ProjectNoSession from "./project-no-session";
import CardProjectAdd from "./card-project-add";

const CarouselProject = async () => {
    const projects = await db.project.findMany({});
    const session = await auth();

    return (
        <div className="w-full flex">
            {projects.length > 0 ? (
                <div>
                    {" "}
                    {session ? (
                        <div className="w-full flex">
                            {projects.map((project: any) => (
                                <CardProject
                                    cardProject={project}
                                    key={project}
                                />
                            ))}
                        </div>
                    ) : (
                        <ProjectNoSession />
                    )}
                </div>
            ) : (
                <CardProjectAdd />
            )}
        </div>
    );
};

export default CarouselProject;
