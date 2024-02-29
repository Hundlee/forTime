import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/app/_components/ui/card";
import { Task } from "@prisma/client";
import { ClipboardList } from "lucide-react";

interface TaskItemProps {
    task: Task;
}

const TaskItem = () => {
    return (
        <div className="w-full">
            <Card className="bg-white border-none pt-6 rounded-3xl w-[87vw]">
                <CardContent className="flex justify-between items-center">
                    <div className="flex">
                        <div className="w-12 h-12 bg-card flex items-center justify-center rounded-full">
                            <ClipboardList />
                        </div>
                        <div className="pl-4">
                            <CardTitle className="text-black text-lg">
                                task
                            </CardTitle>
                            <CardDescription>2 Days ago</CardDescription>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <span className="border-2 border-gray-400 rounded-full h-1 w-1 my-2"></span>
                        <span className="border-2 border-gray-400 rounded-full h-1 w-1 my-2"></span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TaskItem;
