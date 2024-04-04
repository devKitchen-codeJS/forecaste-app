import React from 'react';
interface ITempInfo {
    count:number,
    type: string,
    date: string,

}
const TempInfo:React.FC<ITempInfo> = ({count, type, date}) => {
    return (
     <div className='block'>
        <div className='flex justify-start'>
            <span className=' text-base-100 text-[60px]'>{count} {type}</span>
        </div>
        <div>
            <span className='text-base-100 font-2'>Sunday | 12 Dec 2024</span>
        </div>

     </div>
    )
};

export default TempInfo;