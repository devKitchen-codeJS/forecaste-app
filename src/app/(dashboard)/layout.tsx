"use client";
import { Inter } from "next/font/google";

import "../globals.css";
import { useState } from "react";
import ThemeChange from "@/components/themeChange";
import StoreProvider from "@/lib/providers/storeProvider";
import AuthGoogleProvider from "@/lib/providers/authGoogleProvider";

//transition ease-in-out delay-150 duration-300
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("mytheme");
  return (
    <html data-theme={theme} lang='en'>
      <body className={inter.className}>
        <div className=' bg-primary flex justify-end  relative '>
          {/* <div className='absolute mt-10 flex   flex-col justify-center '>
            <ThemeChange />
          </div> */}
          <div className='absolute  mt-7   '>
            <ThemeChange />
          </div>
        </div>
        <div className='bg-primary px-[80px] py-[40px]  h-[100vh]'>
          <StoreProvider>
            <AuthGoogleProvider>{children}</AuthGoogleProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
