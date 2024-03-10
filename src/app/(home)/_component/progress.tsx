import TaskItem from "@/app/_components/taskItem";
import { db } from "@/app/_lib/prisma";

export default async function Progress() {
    const tasks = await db.task.findMany({});

    return (
        <div>
            {tasks.length > 0 && (
                <>
                    <div className="px-5 mt-2 w-full">
                        <h1 className="text-xl font-semibold">Progress</h1>
                    </div>
                    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden flex gap-5 px-5 ">
                        {tasks.map((task) => (
                            <div key={task.id} className="my-3">
                                <TaskItem task={task} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
