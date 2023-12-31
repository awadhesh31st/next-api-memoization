import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page">
          <div className="header">
            <div className="logo"></div>
            <div className="menu"></div>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
