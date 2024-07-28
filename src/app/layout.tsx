import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biswarup's Page",
  description: "It's a personal portfolio website made by Next JS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} min-h-screen flex flex-col overflow-x-hidden`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
