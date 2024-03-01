import { NextResponse, NextRequest } from "next/server";
// Maybe add prisma check for authorizarion maybe ?

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("next-auth.session-token");

  if (sessionToken) {
    console.log("isAuthenticated");
    return NextResponse.next();
  }

  // TODO: uncomment real path
  // return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/lists/:path*"],
};
