import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "~/components/Header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MMDev",
  description: "Development Studio by M and M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-theme-background ${geistMono.variable}`}>
      <body className="antialiased font-mono overflow-x-hidden min-h-screen leading-loose text-theme-text">
        <Header />
        <main
          id="main"
          className="relative container mx-auto min-h-screen overflow-y-clip py-16 px-4"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
