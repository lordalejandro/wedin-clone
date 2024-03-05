/* import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("next-auth.session-token");

  if (sessionToken) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
  //return NextResponse.next();
}

export const config = {
  matcher: ["/lists/:path*"],
};
 */