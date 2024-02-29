import { NextResponse } from 'next/server';

export function middleware(request: any) {
  const { pathname } = request.nextUrl;
  
  // Redirect '/signup' to another route, for example, the home page.
  if (pathname.includes('/signup')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Continue with the response if no redirect is needed
  return NextResponse.next();
}
