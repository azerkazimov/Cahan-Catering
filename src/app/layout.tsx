import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/shared/providers";
import AuthProvider from "@/components/shared/providers/auth-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/auth-option";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cahan Catering",
  description: "Catering for all occasions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider session={session}>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
