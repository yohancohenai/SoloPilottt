// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // 👈 allows homepage access without login
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // 👈 necessary for Clerk to work with Next.js
};
