import { db } from "@/app/_lib/prisma";
import TaskItem from "./taskItem";

const Task = async ({ projectId }: any) => {
    const task = await db.task.findMany({
        where: {
            projectId: projectId,
        },
    });
    return (
        <main className="text-left mt-10 px-6">
            <h1 className="text-2xl font-semibold">Task</h1>

            <div className="flex flex-col gap-3 mt-5 h-full overflow-hidden">
                {task &&
                    task.map((item) => (
                        <div key={item.id}>
                            <TaskItem task={item} />
                        </div>
                    ))}
            </div>
        </main>
    );
};

export default Task;
