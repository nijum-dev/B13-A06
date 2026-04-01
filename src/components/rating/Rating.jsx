import React from 'react';

const Rating = () => {
    return (
        <div>
            
            <section className='md:flex justify-evenly items-center  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-10' >
                <div className=' ' >
                    <h1 className='font-bold text-5xl'>50K+</h1>
                    <p className='text-white/80 text-md mr-2 '>Active Users</p>
                    {/* <div className='flex'><hr className='flex-col'/></div> */}
                   
                </div>

                <div className='border-r-2 border-l-2 pl-20 pr-20 '>
                    <h1 className='font-bold text-5xl'>200+</h1>
                    <p className='text-white/80 text-md'>Premium Tools</p>
                </div>

                <div>
                    <h1 className='font-bold text-5xl'>4.9</h1>
                    <p className='text-white/80 text-md ml-3'>Rating</p>
                </div>
            </section>


        </div>
    );
};

export default Rating;