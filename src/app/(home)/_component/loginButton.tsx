"use client";

import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation";

const LoginButton = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/auth");
    };
    return (
        <div>
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default LoginButton;
