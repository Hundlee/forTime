import Navigator from "@/app/_components/navigator";
import { db } from "@/app/_lib/prisma";
import Header from "../_components/header";
import TaskItem from "../_components/task";
import { Task } from "@prisma/client";

interface ProjectDetailsPageProps {
    params: {
        id?: string;
    };
    task?: Task;
}

const ProjectDetailsPage = async ({
    params,
    task,
}: ProjectDetailsPageProps) => {
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
            <Header project={project} task={task} />
            <TaskItem projectId={project.id} />
        </div>
    );
};

export default ProjectDetailsPage;
