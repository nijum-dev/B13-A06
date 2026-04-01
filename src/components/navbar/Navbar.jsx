import React from 'react';
import cart from '../../assets/cart.png'

const Navbar = () => {
    return (
        <div className='shadow-sm'>
            <div className='container mx-auto '>
                <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-[#101727]">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
     
    </ul>
  </div>
  <div className=" flex navbar-end gap-4">
    <a><img src={cart} alt="" /></a>
    <a className='lgin text-sm font-bold'>Login</a>
    <a className="text-white pt-2 rounded-4xl btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] lg:block hidden">Get Started</a>
  </div>
</div>
            </div>
        </div>
    );
};

export default Navbar;