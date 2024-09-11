import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  salesRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const IsLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const IsSalesRoute = salesRoutes.includes(nextUrl.pathname);
  const IsAuthRoute = authRoutes.includes(nextUrl.pathname);
  // if (isApiAuthRoute) {
  //   return null;
  // }
  // if (IsAuthRoute) {
  //   if (IsLoggedIn) {
  //     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  //   }
  //   return null;
  // }
  // if (!IsLoggedIn && IsSalesRoute) {
  //   return Response.redirect(new URL("/register", nextUrl));
  // }
  // return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
