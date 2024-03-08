"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/app/_components/ui/card";
import { useRouter } from "next/navigation";

const ProjectNoSession = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/auth");
    };

    return (
        <div className="px-5 my-4">
            <Card
                className="w-[90vw]  rounded-[35px] flex flex-col items-start border-none justify-between shadow-lg"
                onClick={handleLogin}
            >
                <CardHeader className="flex flex-row items-center">
                    <h3>Project</h3>
                </CardHeader>
                <CardContent>
                    <h2 className="text-xl py-10">+ Add new Project</h2>
                </CardContent>
                <CardFooter>
                    <h3 className="text-sm">now</h3>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProjectNoSession;
