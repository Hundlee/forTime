"use client";

import { Button } from "@/app/_components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push("/");
    };
    return (
        <div>
            <Button onClick={handleBack}>
                <MoveLeft />
            </Button>
        </div>
    );
};

export default BackButton;
