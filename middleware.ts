// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"], // Allow public access to these routes
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
  runtime: 'nodejs', // Specify Node.js runtime to avoid Edge Runtime warnings
};
