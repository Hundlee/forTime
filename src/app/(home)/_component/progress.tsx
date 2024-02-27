import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/app/_components/ui/card";
import { ClipboardList } from "lucide-react";

const CardProgress = () => {
    return (
        <div className="w-full mt-2">
            <Card className="bg-white border-none pt-6 rounded-3xl min-w-[90%]">
                <CardContent className="flex justify-between items-center">
                    <div className="flex">
                        <div className="w-12 h-12 bg-card flex items-center justify-center rounded-full">
                            <ClipboardList />
                        </div>
                        <div className="pl-4">
                            <CardTitle className="text-black text-lg">
                                Task Name here
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

export default CardProgress;
