"use client";
import { Inter } from "next/font/google";

import "../../app/globals.css";
import { useState } from "react";
import ThemeChange from "@/components/themeChange";
import StoreProvider from "@/lib/providers/storeProvider";
import content from "@/../public/Content.png";

//transition ease-in-out delay-150 duration-300
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("mytheme");
  return (
    <html data-theme={theme} lang='en'>
      <body className={inter.className}>
        <div>
          <div className=' bg-primary flex justify-end  relative '>
            <div className='absolute  mt-7   '>
              <ThemeChange />
            </div>
          </div>

          <div className='bg-primary px-[80px] py-[40px]  h-[100vh]'>
            <div className='grid grid-cols-12 '>
              <div className='col-span-6  flex-col   relative'>
                <img src={content.src} />
                <div className='relative     mt-10'>
                  <div className='absolute w-[100%] flex flex-col items-center  '>
                    <span className=' z-1 font-bold text-base-100 text-[50px] opacity-30 '>
                      Start with
                    </span>
                    <span className='z-1 font-bold text-base-100 text-[60px]  '>
                      Forecaste-Focus
                    </span>
                  </div>
                </div>
              </div>

              <div className='col-span-6 col-start-7 mt-[200px] '>
              {children}
              </div>
            </div>
            {/* {children} */}
          </div>
        </div>
      </body>
    </html>
  );
}
