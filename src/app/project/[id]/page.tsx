import { db } from "@/app/_lib/prisma";
import Header from "../_components/header";
import TaskItem from "../../_components/task";

interface ProjectDetailsPageProps {
    params: {
        id?: string;
    };
}

const ProjectDetailsPage = async ({ params }: ProjectDetailsPageProps) => {
    if (!params.id) {
        // TODO: redirecionar para home page!!
        return null;
    }

    const project = await db.project.findUnique({
        where: {
            id: params.id,
        },
    });

    if (!project) {
        // TODO: redirecionar para home page!!
        return null;
    }

    return (
        <div>
            <Header project={project} />
            <TaskItem projectId={project.id} />
        </div>
    );
};

export default ProjectDetailsPage;
