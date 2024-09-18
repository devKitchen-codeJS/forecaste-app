"use client";
import Player from "@/components/spotify/player";
import { useRouter } from "next/navigation";
import React from "react";
import ChartComponent from "./Chart";

const Activities: React.FC = () => {
  const router = useRouter();

  return (
    <div className='w-[100%] h-[20vh] px-[20px] py-[15px] rounded-[40px] bg-base-200 grid grid-cols-2 	'>
      <div className=' col-start-1 col-span-4 '>
        <ChartComponent />
      </div>

      {/* <div >
        <button className='btn btn-neutral ' onClick={() => {router.push('/signIn')}}>Start</button>
      </div> */}
    </div>
  );
};

export default Activities;
