import React from 'react';

const PricingSection = () => {
    return (
      <div className='container md:w-full w-[90%] mx-auto mt-30'>
        
        <div className='text-center space-y-5'>
          <h2 className="md:text-5xl text-4xl text-[#101727] font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#627382] md:text-lg text-sm">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className='md:w-full mt-15 grid justify-items-center w-[80%] mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          
          <div className="card w-full max-w-[360px] bg-base-100 rounded-2xl shadow-sm">
            <div className="card-body gap-5 border border-gray-300 rounded-2xl">
              <h2 className="text-3xl font-bold">Starter</h2>
              <p className='text-[#627382]'>Perfect for getting started</p>
              <span className="text-3xl font-bold">
                $0/<span className='text-sm font-medium text-[#627382]'>Month</span>
              </span>

              <ul className="flex flex-col text-[#627382] gap-2">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to 10 free tools</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community support</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1 project per month</span>
                </li>
              </ul>

              <div className="mt-6">
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-12 text-white btn-block">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>

          <div className="relative card w-full max-w-[360px] border border-gray-300 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl shadow-sm">
            
            <span className='absolute -top-3 left-1/2 -translate-x-1/2 badge badge-warning badge-soft rounded-2xl bg-amber-100 text-[#BB4D00]'>
              Most Popular
            </span>

            <div className="card-body rounded-2xl">
              <h2 className="text-3xl font-bold">Pro</h2>
              <p>Best for professionals</p>
              <span className="text-3xl font-bold">
                $29/<span className='text-sm font-medium'>Month</span>
              </span>

              <ul className="flex flex-col gap-2">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to all premium tools</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited templates</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited projects</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cloud sync</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
              </ul>

              <div className="mt-6">
                <button className="btn rounded-full h-12 btn-block">
                  <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                    Start Pro Trial
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="card w-full max-w-[360px] bg-base-100 rounded-2xl shadow-sm">
            <div className="card-body border border-gray-300 rounded-2xl">
              <h2 className="text-3xl font-bold">Enterprise</h2>
              <p className='text-[#627382]'>For teams and businesses</p>
              <span className="text-3xl font-bold">
                $99/<span className='text-sm font-medium text-[#627382]'>Month</span>
              </span>

              <ul className="flex flex-col text-[#627382] gap-2">
                <li><span>Everything in Pro</span></li>
                <li><span>Team collaboration</span></li>
                <li><span>Custom integrations</span></li>
                <li><span>Dedicated support</span></li>
                <li><span>SLA guarantee</span></li>
                <li><span>Custom branding</span></li>
              </ul>

              <div className="mt-6">
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-12 text-white btn-block">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
};

export default PricingSection;
