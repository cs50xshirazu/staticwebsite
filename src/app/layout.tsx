import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سی اس فیفتی شیرازیو",
  description: "CS50xShiraz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body
        dir="rtl"
        className="bg-BodyImage bg-cover bg-center font-IranYekan relative bg-img">
        {children}
      </body>
    </html>
  );
}
