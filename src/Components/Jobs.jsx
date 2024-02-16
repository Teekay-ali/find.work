import React from 'react';

import { BiTimeFive } from 'react-icons/bi';

// Import Images
// import nigeria from '../Assets/nigeria.png';
import nigeria from '../Assets/ng.svg';
import { Clock, Filter } from 'lucide-react';

// Import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';


const jobsData = [
  {
    id: 1,
    image: nigeria,
    title: 'Web Developer',
    time: 'Now',
    location: 'Maiduguri',
    description: 'Responsibilities include designing, creating and maintaining websites through programming languages such as HTML, CSS and JavaScript.',
    company: 'Ministry of Info',
    jobtype: 'Part-time'
  },
  {
    id: 2,
    image: nigeria,
    title: 'Web Designer',
    time: '7 hours ago',
    location: 'Maiduguri',
    description: 'Plan, ideate, create, and build websites and web pages, many of which combine a number of visual elements including text, photos, graphics, and video clips.',
    company: 'Ministry of Agric',
    jobtype: 'Full-time'

  },
  {
    id: 3,
    image: nigeria,
    title: 'Interaction Designer',
    time: '14 hours ago',
    location: 'Maiduguri',
    description: 'Study design brief, and determine the requirements. Compose rough drafts and present the ideas.',
    company: 'Ministry of Comm',
    jobtype: 'Full-time'

  },
  {
    id: 4,
    image: nigeria,
    title: 'Backend Developer',
    time: '1 day ago',
    location: 'Maiduguri',
    description: 'Write web services and APIs used by front-end developers and mobile application developers.',
    company: 'Ministry of Agric',
    jobtype: 'Remote'
  },
  {
    id: 5,
    image: nigeria,
    title: 'Marketing Manager',
    time: '1 day ago',
    location: 'Maiduguri',
    description: 'Responsibilities include designing, creating and maintaining websites through programming languages such as HTML, CSS and JavaScript.',
    company: 'Ministry of Info',
    jobtype: 'Internship'

  },
  {
    id: 6,
    image: nigeria,
    title: 'Front End Developer',
    time: '2 days ago',
    location: 'Maiduguri',
    description: 'Study design brief, and determine the requirements. Compose rough drafts and present the ideas.',
    company: 'Ministry of Comm',
    jobtype: 'Full-time'
  },
  {
    id: 7,
    image: nigeria,
    title: 'Senior UX Designer',
    time: '2 days ago',
    location: 'Maiduguri',
    description: 'Plan, ideate, create, and build websites and web pages, many of which combine a number of visual elements including text, photos, graphics, and video clips.',
    company: 'Ministry of Info',
    jobtype: 'Full-time'
  }, 
  {
    id: 8,
    image: nigeria,
    title: 'Software Engineer',
    time: '2 days ago',
    location: 'Maiduguri',
    description: 'Write web services and APIs used by front-end developers and mobile application developers.',
    company: 'Ministry of Transport',
    jobtype: 'Part-time'
  },
];


const Jobs = () => {
  return (

    <div className='mt-[2rem]'>

      <div className='flex justify-between items-center pt-2 border-greenish'>
        <h1 className='font-semibold text-[25px]'>Latest jobs</h1>

        <div className='flex gap-4 items-center'>
          <span className='font-medium text-[14px] hover:text-greenish hover:cursor-pointer hover:underline'>View more</span>
          <span className='text-gray-300'>|</span>
          <div className='rounded-md bg-green-100 text-green-700 ring-1 ring-inset ring-green-600/20 p-1.5'>
            <Filter size={16} className='cursor-pointer' />
          </div>
        </div>

      </div>

      {/* <div className='job lg:py-10 w-full h-full gap-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'> */}


        {/* Slider */}
        <Swiper
            className="h-[320px] mt-[3rem]"
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2 },
                1400: { slidesPerView: 4 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
        >

          {jobsData.map((job, index) => {
            return (

              <SwiperSlide key={index}>

                <div className='group group/item singleJob p-[20px] bg-greyish rounded shadow-sm shadow-greyish-400/700 hover:shadow-md'>

                  <span className='flex justify-between items-center gap-4'>

                    <h1 className='text-[16px] font-medium text-brownish hover:text-greenish'>{job.title}</h1>

                    <span className='flex items-center text-brownbish gap-2 group-hover:text-textColor'>
                      {/* <Clock size={16} /> */}
                      <span className='inline-flex items-center rounded-md text-[10px] bg-green-50 px-2 py-0.5 font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>{job.jobtype.toUpperCase()}</span>

                    </span>

                  </span>

                  <span className='flex border-b-[2px] pb-[20px] text-[12px] gap-2 mt-[0.3rem] justify-start items-center'>

                    {/* <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-0.5 font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>{job.jobtype}</span> */}
                    <h6 className='text-brownbish group-hover:text-textColor'>{job.location}</h6>
                    <h6 className='text-[8px]'>|</h6>
                    <h6 className='text-brownish group-hover:text-textColor'>Salary: ₦ 400,000</h6>

                  </span>

                  
                  {/* <p className='text-[15px] text-brownish pt-[10px] mt-[12px] h-[120px]'>
                    {job.description}
                  </p> */}

                  <div className='flex items-center gap-3 my-6'>
                    <div className='img p-[4px] rounded-[.8rem] bg-blue-100 h-[40px] w-[40px] flex items-center justify-center'>
                      <img src={nigeria} alt='' className='w-[70%]' />
                    </div>

                    <div>
                      <h4 className='font-medium text-brownish text-[14px]'>{job.company}</h4>
                      <h6 className='text-brownbish text-[12px]'>14 Feb, 2024</h6>
                    </div>

                  </div>
                  

                  <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-brownish hover:bg-blue-100 hover:text-white group-hover/item:text-textColor group-hover:text-brownbish group-hover:border-greenish'>
                    Apply Now
                  </button>

                </div>

              </SwiperSlide>

            );
          })}

        </Swiper>

      {/* </div> */}
    </div>

  );
};

export default Jobs;