"use client";

import { Project, Task, User } from "@prisma/client";
import { MoveLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Addtask from "../[id]/_components/add-task";

interface HeaderProps {
    project: Project;
}

const Header = ({ project }: HeaderProps) => {
    const router = useRouter();

    const handleBack = () => {
        router.push("/");
    };

    return (
        <header className="bg-white shadow-xl  shadow-slate-300 rounded-b-3xl flex flex-col">
            <div className="flex justify-between items-center p-6">
                <MoveLeft onClick={handleBack} />
                <div className="flex">
                    <input type="search" />
                    <label htmlFor="search">
                        <Search />
                    </label>
                </div>
            </div>

            <div className="flex p-6 justify-between items-center">
                <h1 className="text-3xl font-bold">Oct, 2020</h1>
                <Addtask project={project} />
            </div>

            <div className="flex items-center justify-center mb-5">
                <h1 className="text-3xl font-bold p-6">{project.name}</h1>
            </div>
        </header>
    );
};

export default Header;
