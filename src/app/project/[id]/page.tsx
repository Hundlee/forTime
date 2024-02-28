import { db } from "@/app/_lib/prisma";

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

    return <h1>{project.name}</h1>;
};

export default ProjectDetailsPage;
