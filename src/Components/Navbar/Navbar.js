import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faBell, faCaretUp, faCartShopping, faChevronDown, faCircleUser, faGift, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Plus from './Navbar Images/flipkart_star-removebg-preview__1_-removebg-preview-removebg-preview-removebg-preview.png';
import Orders from './Navbar Images/Orders-removebg-preview (2).png';
import Rewards from './Navbar Images/Rewards-removebg-preview.png';
import Message from './Navbar Images/Message-question.png';
import Download from './Navbar Images/Download.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky]  = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.addEventListener('scroll', handleScroll);
    })
    return (
        <div className={`navbar min-w-[1200px] bg-[#2874F0] z-10 ${sticky ? "sticky" : ""} duration-1000`}>
            <div className='flex justify-around mx-auto min-w-[700px]'>
                <div className='min-w-[80px] cursor-pointer'>
                    <p className='heading italic font-bold text-white  mb-[-5px]'>E-kart</p>
                    <div className='flex hover:underline'>
                        <a className='text-xs mr-[1px] italic font-normal text-white' ><Link to="/explore">Explore <span className='font-medium text-amber-200 mr-[1px]'>Plus</span></Link></a> <img className='w-[10px] h-[10px] mt-[2px]' src='https://i.postimg.cc/GmFXQYt0/flipkart-star.png' />
                    </div>
                </div>
                <div className=" ml-4 mr-[3vw]  flex items-center">
                    <input type="text" placeholder="Search for products, brands and more" className="w-[535px] text-sm font-semibold text-black p-[8px]  rounded-l bg-white" />
                    <button className='bg-white py-[6px] px-[13px]'>
                        <FontAwesomeIcon className='text-[#2874F0] font-extrabold' icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className='relative flex items-center group z-10'>
                    <button className=' bg-white text-[#2874F0] font-semibold py-1 px-10'>Login</button>
                    <div className='absolute top-[24px] left-[-70px] hidden group-hover:block'>
                        <ul className=' w-64 shadow-2xl rounded-b-md'>
                            <li className='border-b text-center'><FontAwesomeIcon className='text-white font-extrabold text-4xl mb-[-20px]' icon={faCaretUp} /></li>
                            <li className=' bg-white py-5 px-4 border-b  flex justify-between'><span className='font-semibold text-sm text-[#292929]'>New customer?</span> <span className='font-bold text-sm text-[#2874F0]'>Sign Up</span></li>
                            <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-4 border-b '><FontAwesomeIcon className='text-[#2874F0] font-extrabold text-sm' icon={faCircleUser} /> <span className='ml-3 text-sm'>My Profile</span></li>
                            <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-4 border-b  flex items-center'><img className='w-[15px] h-[15px]' src={Plus}></img><span className='ml-4 text-sm'>E-kart Plus Zone</span></li>
                            <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-4 border-b  flex items-center'><img className='w-5' src={Orders} /> <span className='ml-3 text-sm'>Orders</span></li>
                            <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-4 border-b '><FontAwesomeIcon className='text-[#2874F0] font-extrabold' icon={faHeart} /> <span className='ml-3 text-sm'>Wishlist</span></li>
                            <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-4 border-b  flex items-center'><img className='w-4 h-3' src={Rewards} /> <span className='ml-4 text-sm'>Rewards</span> </li>
                            <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-4 border-b '><FontAwesomeIcon className='text-[#2874F0] font-extrabold' icon={faGift} /> <span className='ml-3 text-sm'>Gift Cards</span></li>
                        </ul>
                    </div>
                </div>
                <div className='min-w-[300px] flex items-center justify-between ml-10'>
                    <p className='text-white font-semibold cursor-pointer'>Become a Seller</p>
                    <div className='relative cursor-pointer z-10 group'>
                        <p className='text-white font-semibold mr-1'>More <FontAwesomeIcon className='text-white w-[9px] duration-100 group-hover:rotate-[-180deg]' icon={faChevronDown} /></p>
                        <div className='absolute top-[20px] left-[-96px] hidden duration-200 group-hover:block'>
                            <ul className=' w-[232px] shadow-2xl rounded-b-md'>
                                <li className='border-b text-center'><FontAwesomeIcon className='text-white font-extrabold text-4xl mb-[-20px]' icon={faCaretUp} /></li>
                                <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-3 border-b flex items-center'><FontAwesomeIcon className='text-[#2874F0] font-extrabold text-sm' icon={faBell} /> <span className='ml-3 text-sm'>Notification Preferences</span></li>
                                <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-3 border-b  flex items-center'><img className='w-3 border]' src={Message}></img><span className='ml-4 text-sm'>24x7 Customer Care</span></li>
                                <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-3 border-b '><FontAwesomeIcon className='text-[#2874F0] text-sm font-extrabold' icon={faArrowTrendUp} /> <span className='ml-3 text-sm'>Advertise</span></li>
                                <li className='hover:bg-[#F9F9FA] bg-white  py-4 px-3 border-b  flex items-center'><img className='w-3.5' src={Download} /> <span className='ml-4 text-sm'>Rewards</span> </li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-white font-semibold cursor-pointer'><FontAwesomeIcon className='text-white mr-[3px] cursor-pointer' icon={faCartShopping} /> Cart</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;