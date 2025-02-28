import bcrypt from "bcryptjs"
import { AuthOptions, DefaultSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "../../../../../prisma/prisma-client"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: number
    } & DefaultSession["user"]
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || ""
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null

          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          })

          if (!user || !user.password) return null

          const passwordMatch = await bcrypt.compare(credentials.password, user.password)

          if (!passwordMatch) return null

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            image: null
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      }
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id.toString()
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = parseInt(token.sub)
      }
      return session
    },
    async signIn({ account, profile }) {
      // For OAuth providers (Google, GitHub)
      if (account && account.provider !== "credentials" && profile?.email) {
        try {
          // Check if user exists
          const existingUser = await prisma.user.findUnique({
            where: { email: profile.email }
          });

          if (existingUser) {
            await prisma.user.update({
              where: { email: profile.email },
              data: {
                name: profile.name || existingUser.name,
                updatedAt: new Date()
              }
            });
          } else {
            // Create new user for OAuth login
            await prisma.user.create({
              data: {
                email: profile.email,
                name: profile.name || "Unknown",
                fullName: profile.name || "Unknown",
                password: await bcrypt.hash(Math.random().toString(36).slice(-8), 10), 
                createdAt: new Date(),
                updatedAt: new Date()
              }
            });
          }
        } catch (error) {
          console.error("Error during OAuth sign-in:", error);
          return false;
        }
      }

      return true
    }
  }
};