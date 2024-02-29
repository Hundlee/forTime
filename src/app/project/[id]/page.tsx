import Navigator from "@/app/_components/navigator";
import { db } from "@/app/_lib/prisma";
import Header from "../_components/header";
import Task from "../_components/task";

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
            <Task />
            <Navigator />
        </div>
    );
};

export default ProjectDetailsPage;
