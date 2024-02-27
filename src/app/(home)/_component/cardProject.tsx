import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/app/_components/ui/card";
import { User } from "lucide-react";

const CardProject = () => {
    return (
        <div className="px-5">
            <Card className="w-full  rounded-[35px] flex flex-col items-start border-none justify-between shadow-xl">
                <CardHeader className="flex flex-row items-center">
                    <div className="p-2 bg-indigo-900 mr-2 rounded-lg">
                        <User />
                    </div>
                    <h3>Project X</h3>
                </CardHeader>
                <CardContent>
                    <h2 className="text-xl py-10">Back End Delevopment</h2>
                </CardContent>
                <CardFooter>
                    <h3 className="text-sm">October 2020</h3>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardProject;
