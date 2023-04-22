import React from 'react';

const Banner = () => {
    return (
        <div className='my-container lg:grid lg:grid-cols-2 py-20 gap-10 bg-blue-100 '>
            <div>
            <h1 className='text-[82px] font-bold text-black'>Classical <span className='primary-color'>Education </span> For The Future </h1>
            <p className='text-xl font-medium text-[rgb(123,123,138)] leading-8'>It Is Long Established Fact That Reader Distracted By The Readable Content.</p>
            <div className='bg-white md:flex justify-between  rounded-md shadow-e1 items-center py-[10px] relative lg:pr-[10px] lg:pl-[38px] pl-4 pr-4'>

                <input className='' type="email" name="email" id="email" placeholder="Enter your mail" />

                <button className='main-btn'>Get Start Now</button>

            </div>
            </div>
        </div>
    );
};

export default Banner;