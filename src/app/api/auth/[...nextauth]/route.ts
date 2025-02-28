import NextAuth from "next-auth"
import { authOptions } from "./auth-option";

// Create and export the handler functions directly
// This is what Next.js App Router expects
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }