import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid'

const Banner = () => {
    return (
     <div className='bg-blue-100 px-4 lg:px-0 pb-10 lg:pb-0 font-roboto'>
           <div className='my-container lg:grid lg:grid-cols-2 pt-10'>
            <div className='lg:pt-20 lg:pr-2'>
            <h1 className=' text-[48px] lg:text-[82px] pr-8 leading-[60px] lg:leading-[107px] font-bold text-black'>Classical <span className='primary-color'>Education </span> For The Future </h1>
            <p className='text-xl font-medium text-[rgb(123,123,138)] leading-8 pr-4 lg:pr-24 mt-4 lg:mt-8'>It Is Long Established Fact That Reader Distracted By The Readable Content.</p>
            <div className='bg-white lg:w-5/6 md:flex justify-between  rounded-md shadow-e1 items-center py-[10px] relative lg:pr-[10px] lg:pl-[38px] pl-4 pr-4 mt-6 lg:mt-10'>
                <div className='flex gap-2'>
                <EnvelopeIcon className="h-6 w-6 text-[rgb(123,123,138)]" />
                <input className='outline-none' type="email" name="email" id="email" placeholder="Enter your mail" />
                </div>

                <button className='main-btn w-full  mt-4 lg:mt-0 lg:w-48 '>Get Start Now</button>

            </div>
            </div>
            <div className='hidden lg:block'>
                <img className='overflow-hidden lg:min-w-full ' src="https://bestwpware.com/react-templates/edumim/static/media/man1.5f992e1f22cd54990ca0.png" alt="" />
            </div>
        
        </div>
     </div>
    );
};

export default Banner;