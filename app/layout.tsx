import type { Metadata } from "next";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedin",
  description: "Wedding Registry",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <NavBar currentUser={currentUser} />
        <div className="pt-16 pb-10">{children}</div>
      </body>
    </html>
  );
}
