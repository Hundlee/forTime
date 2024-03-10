import { Project } from "@prisma/client";
import { Search } from "lucide-react";
import Addtask from "../[id]/_components/add-task";
import BackButton from "@/app/_components/backButton";

interface HeaderProps {
    project: Project;
}

const Header = ({ project }: HeaderProps) => {
    return (
        <header className="bg-white shadow-xl  shadow-slate-300 rounded-b-3xl flex flex-col">
            <div className="flex justify-between items-center p-6">
                <BackButton />
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
