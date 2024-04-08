import Player from "@/components/spotify/player";
import React from "react";

const Activities: React.FC = () => {
  return (
    <div
      className='w-[100%] h-[240px] px-[20px] py-[15px] rounded-[40px] bg-base-200 flex justify-start
     items-center	'>
      {/* <span>Activities</span> */}
      <div className=''>
        {" "}
        <Player />
      </div>
    </div>
  );
};

export default Activities;
