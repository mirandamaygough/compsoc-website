import type { Metadata } from "next";
import { JetBrains_Mono, Barlow } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leeds Computing Society",
  description: "The website of Leeds Computing Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-jetbrains">{children}</body>
    </html>
  );
}
