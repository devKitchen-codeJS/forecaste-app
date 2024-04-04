'use client'
import { Inter } from "next/font/google";

import "./globals.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("mytheme");

  return (
    <html data-theme={theme} className='bg-primary px-[80px] pt-[80px]' lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
