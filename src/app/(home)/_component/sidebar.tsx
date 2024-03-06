import { Avatar, AvatarFallback } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/_components/ui/sheet";
import { auth } from "@/app/_services/auth";
import { User } from "lucide-react";
import UserInfo from "./user-info";

const Sidebar = async () => {
    const session = await auth();

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="rounded-full h-[55px]">
                        <User />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className=" text-white">Menu</SheetTitle>
                    </SheetHeader>
                    <UserInfo user={session?.user} />
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Sidebar;
