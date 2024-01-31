import React from 'react';

import nigeria from '../Assets/nigeria.png';


const Value = () => {

  return (

    <div className='mb-[6rem] mt-[2rem]'>

      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds us true and to account</h1>

      <div className='grid gap-[10rem] sm:grid-cols-1 lg:grid-cols-3 items-center'>

        <div className='singleGrid rounded-[10px] hover:bg-yellowish p-[1.5rem]'>

          <div className='flex items-center gap-3'>

            <div className='img p-[4px] rounded-[.8rem] bg-dark-yellow h-[40px] w-[40px] flex items-center justify-center'>
              <img src={nigeria} alt='' className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Accountability
            </span>

          </div>

          <p className='text-[14px] text-brownish opacity-[.7] py-[1rem] font-semibold'>
            Things being made beautifully simple are at the heart of everything we do.
          </p>

        </div>

        <div className='singleGrid rounded-[10px] hover:bg-dark-yellow p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='img p-[4px] rounded-[.8rem] bg-yellowish h-[40px] w-[40px] flex items-center justify-center'>
              <img src={nigeria} alt='' className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor hover:text-brownish text-[18px]'>
            Transparency
            </span>
          </div>

          <p className='text-[14px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Things being made beautifully simple are at the heart of everything we do.
          </p>

        </div>

        <div className='singleGrid rounded-[10px] hover:bg-yellowish p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='img p-[4px] rounded-[.8rem] bg-dark-yellow h-[40px] w-[40px] flex items-center justify-center'>
              <img src={nigeria} alt='' className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Ease of Use
            </span>
          </div>

          <p className='text-[14px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Things being made beautifully simple are at the heart of everything we do.
          </p>

        </div>


      </div>

      <div className="card mt-[4rem] flex justify-between p-[5rem] rounded-[10px]">

        <div>
          <h1 className='text-brownish text-[30px] font-bold'>Ready for a career change?</h1>
          <h2 className='text-brownish text-[30px] font-bold'>Let's make it happen.</h2>
        </div>

        <button className='border-[2px] rounded-[10px] px-[50px] text-[16px] font-semibold text-brownish hover:bg-brownish hover:text-white border-brownish'>Get Started</button>
        
      </div>

    </div>
    
  );
};

export default Value;