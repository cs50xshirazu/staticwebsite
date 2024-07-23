import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    description: "CS50xShiraz",
    manifest: "/site.webmanifest"
};

type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="fa" dir="rtl" className={`${IRANYekanX.variable} ${GeoSlab703.variable}`}>

        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#820000" />
            <meta name="msapplication-TileColor" content="#820000" />
        </head>

        <body className="font-iran-yekan-x overflow-x-hidden">

        {children}

        </body>
        </html>
    );
}
