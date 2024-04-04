import React from "react";

const SideBar: React.FC = () => {
  return (
    <div className='w-[100px] h-[500px] px-[20px] py-[15px] rounded-[40px] bg-base-200'>
      <div className='avatar'>
        <div className='w-15 rounded-full'>
          <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
