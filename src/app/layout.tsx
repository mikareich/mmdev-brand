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
        <html lang="en" className={geistMono.variable}>
            <body className="antialiased font-mono w-full overflow-x-hidden px-34 bg-taupe-100">
                <Header />
                <main className="container mx-auto">{children}</main>
            </body>
        </html>
    );
}
