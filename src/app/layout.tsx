import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";

const IRANYekanX = localFont({
    src: "../assets/fonts/IRANYekanX/IRANYekanXVF.woff2",
    display: "swap",
    variable: "--font-iran-yekan-x"
});

const GeoSlab703 = localFont({
    src: "../assets/fonts/GeoSlab703/GeoSlab703 Md BT Medium.ttf",
    display: "swap",
    variable: "--font-geo-slab-703"
});

export const metadata: Metadata = {
    title: "سی اس فیفتی اکس شیراز",
    description: "CS50xShiraz"
};

type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="fa" dir="rtl" className={`${IRANYekanX.variable} ${GeoSlab703.variable}`}>
        <body className="font-iran-yekan-x overflow-x-hidden">
        <BackgroundPattern />
        <Navbar />
        <Header />
        {children}
        </body>
        </html>
    );
}
