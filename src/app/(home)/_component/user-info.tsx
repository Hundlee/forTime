"use client";

import { Avatar, AvatarFallback } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

interface UserInfoProps {
    user: Session["user"];
}

const UserInfo = ({ user }: UserInfoProps) => {
    if (!user) return;

    return (
        <div>
            <div className="mt-10 flex items-center gap-2">
                <Avatar>
                    <AvatarFallback>H</AvatarFallback>
                </Avatar>
                <span className="text-white">{user.email}</span>
            </div>
            <div className="mt-10">
                <Button variant="destructive" onClick={() => signOut()}>
                    Sign Out
                </Button>
            </div>
        </div>
    );
};

export default UserInfo;
