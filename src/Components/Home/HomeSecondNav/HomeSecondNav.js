import React from 'react';
import './HomeSecondNav.css';
import p1 from './Images/p11.png';
import p2 from './Images/p12.png';
import p3 from './Images/p13.png';
import p4 from './Images/p14.png';
import p5 from './Images/p15.png';
import p6 from './Images/p16.png';
import p7 from './Images/p17.png';
import p8 from './Images/p18.png';
import p9 from './Images/p19.png';
import p10 from './Images/P20.png';


const HomeSecondNav = () => {
    return (
        <div className='pr-10 min-w-[1500px] border-b border-[#D1D3D5] py-3'>
            <div className='w-8/12 mx-auto flex justify-between'>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p1} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>Top Offers</p>
                </div>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p2} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>Mobiles & Tablets</p>
                </div>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p3} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>Electronics</p>
                </div>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p4} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>TVs & Appliances</p>
                </div>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p5} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>Fashion</p>
                </div>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p6} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>Beauty</p>
                </div>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p7} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>Home & Furniture</p>
                </div>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p8} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>FK Originals</p>
                </div>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p9} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>Flights & Hotels</p>
                </div>
                <div className='cursor-pointer group'>
                    <img className='w-16 mx-auto' src={p10} />
                    <p className='text-[14px] group-hover:text-[#1e70f3*] font-[500] text-center'>Grocery</p>
                </div>
            </div>
        </div>
    );
};

export default HomeSecondNav;