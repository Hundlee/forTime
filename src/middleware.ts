import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./app/_lib/get-url";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("authjs.session-token");
    const pathname = request.nextUrl.pathname;

    console.log({
        token: token?.value,
        pathname,
    });

    if (pathname === "/auth" && token) {
        return NextResponse.redirect(new URL(getUrl("/")));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
