import { db } from "@/app/_lib/prisma";
import CardProject from "./cardProject";

const Carousel = async () => {
    const projects = await db.project.findMany({});

    return (
        <div className="w-full flex">
            {projects.map((project: any) => (
                <CardProject cardProject={project} key={project} />
            ))}
        </div>
    );
};

export default Carousel;
