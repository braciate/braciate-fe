import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("next-auth.session-token");

  if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/bem/:path*", "/ukm/:path*", "/hima/:path*", "/dpm/:path*"],
};
