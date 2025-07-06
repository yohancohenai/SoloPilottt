// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Allow anyone to access "/"
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
