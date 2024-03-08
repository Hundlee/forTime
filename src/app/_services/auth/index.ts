import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/app/_lib/prisma";

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    pages: {
        signIn: "/auth",
        signOut: "/auth",
        error: "/auth",
        verifyRequest: "/auth",
        newUser: "/",
    },
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
    callbacks: {
        async session(params) {
            const { session, user } = params;
            return {
                ...session,
                user: { ...session.user, id: user.id },
            };
        },
    },
});
