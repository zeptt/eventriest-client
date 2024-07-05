import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routeMatcher } from "./lib/route-matcher";
import api from "./lib/api";

export async function middleware(request: NextRequest) {
  const isGuarded = routeMatcher(request.nextUrl.pathname, ["/dashboard"]);

  if (!isGuarded) {
    return NextResponse.next();
  }
  
  try {
    const cookie = request.cookies.get("sid");

    if (!cookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const authStatus = await api.get("/auth/verify", {
      headers: {
        cookie: `${cookie.name}=${cookie.value}`
      },
    });

    if (authStatus.status !== 200) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
