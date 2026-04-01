import React from 'react';
import userImg from "../../assets/user.png"

import rocket from "../../assets/rocket.png"
import pac from "../../assets/package.png"

const GetStarted = () => {
    return (
        <div className='text-center space-y-16 container md:w-full w-[90%] mx-auto mt-30'>
         <div className='text-center space-y-5 '>
            <h2 className='md:text-5xl text-3xl text-[#101727] font-bold'>Get Started in 3 Steps</h2>   
         <p className='text-[#627382] md:text-lg text-sm'>Start using premium digital tools in minutes, not hours.</p>


         </div>
         <div className='md:flex justify-items-center gap-10 justify-around'>
            <div className='border  border-gray-300 mb-4 shadow-sm bg-base-100 w-90 rounded-2xl space-y-5 p-10 relative'>
                
                <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-3 right-3 text-white text-xs px-3.5 py-2.5 rounded-full '>01</span>
                <img className='mx-auto bg-[#4f39f62b] p-4 rounded-full' src={userImg} alt="" />
                <p className='text-[#101727] font-bold text-2xl'>Create Account</p>
                <p className='text-[#627382] pb-5'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='border border-gray-300 shadow-sm mb-4 bg-base-100 w-90 rounded-2xl space-y-5 p-10 relative'>
                <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-3 right-3 text-white text-xs px-3.5 py-2.5 rounded-full '>02</span>
                <img className='mx-auto bg-[#4f39f62b] p-4 rounded-full' src={pac} alt="" />
                <p className='text-[#101727] font-bold text-2xl'>Choose Products</p>
                <p className='text-[#627382] pb-5'>Browse our catalog and select the tools that fit your needs.</p>
            </div>
            <div className='border border-gray-300 mb-4 shadow-sm bg-base-100 w-90 rounded-2xl space-y-5 p-10 relative'>
                <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-3 right-3 text-white text-xs px-3.5 py-2.5 rounded-full '>03</span>
                <img className='mx-auto bg-[#4f39f62b] p-4  rounded-full' src={rocket} alt="" />
                <p className='text-[#101727] font-bold text-2xl'>Start Creating</p>
                <p className='text-[#627382] pb-5'>Download and start using your premium <br /> tools immediately.</p>
            </div>
            
            
         </div>
        </div>
    );
};

export default GetStarted;
