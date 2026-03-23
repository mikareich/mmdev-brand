import type { Metadata } from "next";
import { Fira_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "~/components/Header";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

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
    <html
      lang="en"
      className={`bg-theme-background ${geistMono.variable} ${firaSans.variable}`}
    >
      <body className="isolate antialiased font-body overflow-x-hidden min-h-screen leading-loose text-theme-text">
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
