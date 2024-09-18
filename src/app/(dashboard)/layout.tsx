"use client";
import { Inter } from "next/font/google";

import "../globals.css";
import { useState } from "react";
import ThemeChange from "@/components/themeChange";
import StoreProvider from "@/lib/providers/storeProvider";
import AuthGoogleProvider from "@/lib/providers/authGoogleProvider";
import "@/lib/firebase/firebase";
//transition ease-in-out delay-150 duration-300
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("mytheme");
  // console.log();

  return (
    <html data-theme={theme} lang='en'>
      <body className={inter.className}>
        <div className='  flex justify-end  relative '>
          <div className=' absolute top-7 right-1'>
            <ThemeChange />
          </div>
        </div>

        <div>
          <StoreProvider>
            <AuthGoogleProvider>{children}</AuthGoogleProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
