import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  if (!accessToken && request.nextUrl.pathname !== "/auth/signin") {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}
console.log('middleware');
export const config = {
  matcher: ["/((?!api|auth|_next/static|_next/image|.*\\.svg$).*)"],
};