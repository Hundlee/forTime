import {
    Bell,
    Calendar,
    Home,
    Search,
} from "lucide-react";
import { Button } from "./ui/button";

const Navigator = () => {
    return (
        <footer className="w-full flex items-center justify-center fixed bottom-0 pb-5 px-2">
            <ul className="w-full flex justify-between">
                <li className="">
                    <Button variant="link">
                        <Home width={25} height={25} />
                    </Button>
                </li>
                <li>
                    <Button variant="link" className="text-slate-300">
                        <Calendar width={25} height={25} />
                    </Button>
                </li>
                <li>
                    <Button variant="link" className="text-slate-300">
                        <Bell width={25} height={25} />
                    </Button>
                </li>
                <li>
                    <Button variant="link" className="text-slate-300">
                        <Search width={25} height={25} />
                    </Button>
                </li>
            </ul>
        </footer>
    );
};

export default Navigator;
