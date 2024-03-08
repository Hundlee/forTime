"use client";

import { Avatar, AvatarFallback } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import AddProject from "./add-project";

interface UserInfoProps {
    user: Session["user"];
}

const UserInfo = ({ user }: UserInfoProps) => {
    if (!user) return;

    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="mt-10 flex items-center gap-2">
                <Avatar>
                    <AvatarFallback>H</AvatarFallback>
                </Avatar>
                <span className="text-white">{user.email}</span>
            </div>

            <div className="w-full mt-5">
                <AddProject />
            </div>

            <div className="">
                <Button
                    variant="destructive"
                    onClick={() => signOut()}
                    className="w-full"
                >
                    Sign Out
                </Button>
            </div>
        </div>
    );
};

export default UserInfo;
