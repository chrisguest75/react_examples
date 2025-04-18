import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/navigation-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn UI",
  description: "Explore the Shadcn UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed z-0" >
          <div className="bg-gray-200 m-2 p-2 rounded-xl opacity-100" >
            <div className="">
            <NavigationMenuDemo />
            </div>
          </div>
        </div>
        <div className="z-10" >
        {children}
        </div>
      </body>
    </html>
  );
}
