import React from "react";
import weatherIcon from "../../../../public/sun_rain.png";
import frame3 from '../../../../public/frame3.png'
import settingsIcon from '../../../../public/Settings-alt.png'
const SideBar: React.FC = () => {
  const handle = () => {
    console.log("asd");
  };
  return (
    <div className='w-[100px] h-[100%] px-[20px] py-[15px] rounded-[40px] bg-base-200 text-base-100'>
      <div className='avatar'>
        <div className='w-15 rounded-full'>
          <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
        </div>
      </div>
      <div className='mt-[90px]flex flex-col  text-center '>
        <div className=' mt-[50px] flex flex-col justify-center transition ease-in-out delay-150 hover:scale-110  duration-300   ' onClick={handle}>
          <img src={weatherIcon.src} />
          <span> weather</span>
        </div>
        <div className=' mt-[50px] flex flex-col justify-center  transition ease-in-out delay-150 hover:scale-110  duration-300  ' onClick={handle}>
          <img src={frame3.src} className='h-[50px]' />
           <span> cities</span>
        </div>
        <div className=' mt-[50px] flex flex-col justify-center transition ease-in-out delay-150 hover:scale-110  duration-300  ' onClick={handle}>
          <img src={settingsIcon.src} />
          <span> settings</span>
        </div>
      
      </div>
    </div>
  );
};

export default SideBar;
