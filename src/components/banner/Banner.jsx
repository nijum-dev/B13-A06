import React from 'react';
import circle from '../../assets/Group 5.png';
import play from '../../assets/Play (1).png'
import Bnr from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <section className='md:flex items-center justify-center mt-12 mb-12 gap-10 '>
                <div className='left-div'>
                    <div className='badge flex items-center gap-2 bg-[#E1E7FF] w-fit rounded-2xl p-1 px-4'  >
                        <img src={circle} alt="" />
                        <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm font-semibold '> New: AI-Powered Tools Available</p>

                    </div>
                    <h1 className='font-extrabold text-4xl mb-2 mt-3'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-[#627382] text-sm mb-3'>Access premium AI tools, design assets, templates, and productivity <br />
           software—all in one place. Start creating faster today.<br /> Explore Products
                    </p>

                    <div className='flex gap-2 '>
                        <button className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl text-sm p-3'>Explore Products</button>
                       <div>
                         <button className='flex gap-1 bg-white border border-[#9514FA] rounded-3xl text-sm p-3 text-[#9614fa]'>
                            <img src={play} alt="" />
                            Watch Demo
                            </button></div>
                    </div>

                </div>

                <div className='right-div'>

                    <img src={Bnr} alt="" />
                </div>
            </section>


        </div>
    );
};

export default Banner;