import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono =JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUU Computing Society",
  description: "The website of Leeds University Union Computing Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  );
}
