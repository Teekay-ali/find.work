import React from 'react';

import {AiOutlineSearch} from 'react-icons/ai';

import { FaCheck } from "react-icons/fa";

const Search = () => {
  return (
    <div className='search grid gap-4 bg-greyish rounded-[10px] p-[2.5rem] mb-4 mt-[7rem]'>

      <form action="">
        <div className='flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-4 shadow-sm'>

          <div className='flex gap-4 items-center'>
            <AiOutlineSearch className='text-[20px] mx-2 icon'/>
            <input type='text' className='bg-transparent text-brownbish focus:outline-none w-[100%]' placeholder='Job Title or Keywords' />
          </div>

          <button className='bg-greenish p-2.5 px-10 rounded-[6px] text-white cursor-pointer'>Search</button>

        </div>
      </form>

      <div className='sec flex items-center justify-between text-[13px] mt-4'>
        
        <div className='flex gap-10'>

          {/* Relevance */}
          <div className='single flex items-center gap-2'>

            <label htmlFor="relevance" className='text-brownbish font-semibold'>
              Sort by
            </label>

            <select name="relevance" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="" selected>-</option>
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Contains</option>
              <option value="">Starts with</option>
            </select>

          </div>

          {/* Type */}
          <div className='single flex items-center gap-2'>

            <label htmlFor="type" className='text-brownbish font-semibold'>
              Type
            </label>

            <select name="type" id="type" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="" selected>-</option>
              <option value="">Full-time</option>
              <option value="">Part-time</option>
              <option value="">Contract</option>
              <option value="">Remote</option>
            </select>

          </div>

          {/* Level */}
          <div className='single flex items-center gap-2'>

            <label htmlFor="level" className='text-brownbish font-semibold'>
              Level
            </label>

            <select name="level" id="level" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="" selected>-</option>
              <option value="">Junior</option>
              <option value="">Intermediate</option>
              <option value="">Senior</option>
            </select>

          </div>

          {/* LGA */}
          <div className='single flex items-center gap-2'>

            <label htmlFor="lga" className='text-brownbish font-semibold'>
              LGA
            </label>

            <select name="lga" id="lga" className='bg-white rounded-[3px] px-4 py-1'>
              <option value="">All</option>
              <option value="">Abadam</option>
              <option value="">Askira/Uba</option>
              <option value="">Bama</option>
              <option value="">Bayo</option>
              <option value="">Biu</option>
              <option value="">Chibok</option>
              <option value="">Damboa</option>
              <option value="">Dikwa</option>
              <option value="">Gubio</option>
              <option value="">Guzamala</option>
              <option value="">Gwoza</option>
              <option value="">Hawul</option>
              <option value="">Jere</option>
              <option value="">Kaga</option>
              <option value="">Kala/Balge</option>
              <option value="">Konduga</option>
              <option value="">Kukawa</option>
              <option value="">Kwaya Kusar</option>
              <option value="">Mafa</option>
              <option value="">Magumeri</option>
              <option value="" selected>Maiduguri</option>
              <option value="">Marte</option>
              <option value="">Mobbar</option>
              <option value="">Monguno</option>
              <option value="">Ngala</option>
              <option value="">Nganzai</option>
              <option value="">Shani</option>
            </select>

          </div>

          <div className='flex items-center bg-gray-300 p-1 rounded-[3px] text-green-500'>
            <FaCheck  className='mx-1 cursor-pointer' />
          </div>
        
        </div>

        <span className='text-[#a1a1a1] flex justify-end cursor-pointer underline hover:text-red-400'>Clear filters</span>

      </div>

    </div>
  );
};

export default Search;