import React from 'react';

const Navbar = () => {
  return (

    <div className='bg-white z-50 fixed mt-0 top-0 w-[85%] border-b-[1px]'>

      <div className='flex justify-between items-center p-[1rem] text-[15px] bg-white'>
        
        <div className='logo'>
          <h1 className='logo text-[24px] text-greenish'><strong className='font-black'>find</strong>.work</h1>
        </div>

        <div className='menu justify-between items-center flex gap-6 font-medium'>
          <li className='menuList text-[#6f6f6f] hover:text-greenish'>Jobs</li>
          <li className='menuList text-[#6f6f6f] hover:text-greenish'>Companies</li>
          <li className='menuList text-[#6f6f6f] hover:text-greenish'>Post a job</li>
          <li className='menuList text-[#6f6f6f] hover:text-greenish'>Contact</li>
          <li className='menuList text-greyish font-bold'>|</li>
          <li className='menuList text-browbish font-semibold'>Login</li>
          <li className='menuList text-greenish hover:text-greenish register font-semibold'>Register</li>
        </div>
      </div>

    </div>

  );
};

export default Navbar;