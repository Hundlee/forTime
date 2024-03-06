"use client";

import { Label } from "../_components/ui/label";
import { Input } from "../_components/ui/input";
import { Button } from "../_components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "../_components/ui/use-toast";

export default function AuthForm() {
    const form = useForm();

    const handleSubmit = form.handleSubmit(async (data: any) => {
        try {
            await signIn("email", { email: data.email, redirect: false });
            toast({
                title: "Check your email",
                description:
                    "We sent you a login link. Be sure to check your spam too.",
            });
        } catch (error) {
            toast({
                title: "ERROR",
                description:
                    "An error occurred while sending the login link. Please try again.",
            });
        }
    });

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center space-y-4 p-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Enter your email below to login to your account
                    </p>
                </div>
                <form
                    className="w-full max-w-sm space-y-2"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="m@example.com"
                            type="email"
                            className="border border-zinc-600 rounded-lg font-semibold focus:border-primary"
                            {...form.register("email")}
                        />
                    </div>
                    <Button className="w-full">Send Magic Link</Button>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                        We have sent a magic link to your email address. Click
                        the link in the email to login.
                    </p>
                </form>
            </div>
        </div>
    );
}
