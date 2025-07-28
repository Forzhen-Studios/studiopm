import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import Image from "next/image";
import "./styles/globals.css";
import Sidebar from "./components/sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FPM - Forzhen Project Manager",
  description:
    "Forzhen Studios' project manager software built and used in house",
};

// const currentYear: number = new Date().getFullYear();

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
        {/* <header className="w-full bg-[#202020] p-2">
          <Image
            src="/FPM-logo.svg"
            width={25}
            height={25}
            alt="Picture of the author"
          />
        </header> */}

        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
{/* 
        <footer className="flex justify-center text-zinc-700">
          <p>&copy; {currentYear} Forzhen Project Manager — rights reserved</p>
        </footer> */}
      </body>
    </html>
  );
}
