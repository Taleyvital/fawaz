import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname === "/admin/login";
  const session = request.cookies.get("admin-session");

  if (!isLoginPage && (!session || session.value !== process.env.ADMIN_PASSWORD)) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};