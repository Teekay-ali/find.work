import { Facebook, Instagram, Twitter, Linkedin, X, Youtube, Twitch } from 'lucide-react';
import React from 'react';


const Footer = () => {
  return (
    <div className='footer bg-green-100 rounded-[10px] mb-[4rem]'>

      <div className='p-[5rem] pb-8 gap-14 grid grid-cols-5 m-auto items-start justify-center'>

        <div className='grid'>
          <div className='logo'>
            <h1 className='logo text-[25px] text-brownish pb-[1.5rem]'><strong className='font-black'>find</strong>.work</h1>
          </div>
          <p className='text-brownish pb-[13px] opacity-70 leading-7'>
            We always make our seekers find the best jobs and employers find the best candidate that matches their requirements.
          </p>
        </div>

        <div className='grid'>

          <span className='title text-[18px] font-semibold pb-[1.5rem] text-brownish'>
            Company
          </span>

          <div className='grid gap-3'>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>About Us</li>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>Features</li>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>News</li>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>FAQ</li>
          </div>

        </div>

        <div className='grid'>

          <span className='title text-[18px] font-semibold pb-[1.5rem] text-brownish'>
            Resources
          </span>

          <div className='grid gap-3'>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>Account</li>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>Support</li>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>Feedback</li>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>Contact Us</li>
          </div>

        </div>

        <div className='grid'>

          <span className='title text-[18px] font-semibold pb-[1.5rem] text-brownish'>
            Sector
          </span>

          <div className='grid gap-3'>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>Government</li>
            <li className='text-brownish opacity-[.7] hover:opacity-[1]'>Private</li>
          </div>

        </div>

        <div className='grid'>

          <span className='title text-[18px] font-semibold pb-[1.5rem] text-brownish'>
            Contact Information
          </span>

          <div className='grid'>
              <div className='text-brownish flex items-center justify-start gap-4'>
                <Instagram size={18}  className=' opacity-[.7] hover:opacity-[1] cursor-pointer'/>
                <Facebook size={18}  className=' opacity-[.7] hover:opacity-[1] cursor-pointer'/>
                <Twitter size={18}  className=' opacity-[.7] hover:opacity-[1] cursor-pointer'/>
                <Linkedin size={18}  className=' opacity-[.7] hover:opacity-[1] cursor-pointer'/>
                <Youtube size={18}  className=' opacity-[.7] hover:opacity-[1] cursor-pointer'/>
                <Twitch size={18}  className=' opacity-[.7] hover:opacity-[1] cursor-pointer'/>
              </div>
          </div>
          <li className='text-brownish mt-[18px]'>contact@abbatoko.com</li>

        </div>

      </div>

      <div className='flex items-center justify-start mb-4 px-[5rem]'>
        <span className='title text-[14px] font-semibold pb-[1rem] text-brownish p-4 bg-blue-100 rounded-t-[8px]'>
        ᴄᴏᴘʏʀɪɢʜᴛ | <span className='text-brownish'>ꜱᴏꜰᴛꜱᴛʀᴏᴋᴇꜱ ʟᴛᴅ</span>
        </span>
        {/* <span className='title text-[14px] font-semibold pb-[1rem] text-brownish p-4 bg-blue-100 rounded-t-[8px]'>
        ᴄᴏᴘʏʀɪɢʜᴛ | <span className='text-brownish'>ᴀʙʙᴀ.ᴛɢ</span>
        </span> */}
      </div>

    </div>
  );
};

export default Footer;