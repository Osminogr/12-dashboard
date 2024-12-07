import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { useAppSelector } from "./store/store";

export function middleware(request: NextRequest) {
   const cookieStore = cookies();
   const accessToken = cookieStore.get("accessToken");
 
   if (!accessToken && request.nextUrl.pathname !== "/auth/signin") {
     return NextResponse.redirect(new URL("/auth/signin", request.url));
   }
 }
console.log('middleware on');
export const config = {
   matcher: ["/((?!api|auth|_next/static|_next/image|.*\\.svg$).*)"],
 };