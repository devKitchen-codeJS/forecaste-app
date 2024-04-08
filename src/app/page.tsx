"use client";
import { useState } from "react";
import frame3 from "../../public/locationIcon.png";
import framearrow from "../../public/Vector.png";
import TempInfo from "@/components/tempretureInfo";
import cloud from "../../public/cloud.png";
import SideBar from "@/components/bars/sideBar";
import Activities from "@/components/bars/activitiesBar";
import WetherBar from "@/components/bars/wheatherBar";
import WetherChart from "@/components/bars/wetherChartBar";
import ThemeChange from "@/components/themeChange";
export default function Home() {
  const [theme, setTheme] = useState("mytheme");
  const handle = () => {
    // setTheme
    console.log("theme", theme);
    if (theme === "dark") {
      setTheme("mytheme");
    } else {
      setTheme("dark");
    }
  };
  return (
    <main className=''>
      <div className=' grid grid-cols-12'>
        <div className=' col-start-1 col-span-3  pl-[60px]'>
          <div className='flex w-44  items-center  justify-around  '>
            <img src={frame3.src} className='' />
            <span className=' text-base-100 text-[25px]  '>New York</span>
            <img src={framearrow.src} className='ml-[20px] ' />
          </div>

          <div className='mt-[40px]'>
            <span className=' text-base-100 text-[50px] font-[400] '>
              Cloudy
            </span>
          </div>

          <div className='mt-[50px]'>
            <TempInfo count={26} type='°C' date='12' />
          </div>
        </div>
        <div className='flex justify-center col-start-10 col-span-3 '>
          <img src={cloud.src} />
        </div>
      </div>
      <div className='mt-[30px]  grid grid-cols-12   gap-[40px]  '>
        <div className=' col-start-1 col-span-1 '>
          <SideBar />
        </div>
        <div className=' col-span-9 '>
          <Activities />
          <div className='mt-[45px] '>
            <WetherChart />
          </div>
        </div>
        <div className='col-start-11 col-span-4'>
          <WetherBar />
        </div>
      </div>
    </main>
  );
}
