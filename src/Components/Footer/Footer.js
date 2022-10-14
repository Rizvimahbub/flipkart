import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import bag from './Images/bag.png';
import gift from './Images/gift.png';
import question from './Images/question.png';
import star from './Images/star.png';
import cards from './Images/cards.svg';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='bg-[#172337] min-w-[1500px]'>
            <div className='border-b border-[#454D5E]'>
                <div className='flex pt-[40px] ml-[65px] w-[90%] pr-12 pb-10'>
                    <div className='grow-[5]'>
                        <p className='text-[13px] text-[#878787] mb-[9px]'>ABOUT</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Contact Us</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>About Us</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Careers</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Flipkart Stories</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Press</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Flipkart Wholesale</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Corporate Information</p>
                    </div>
                    <div className='grow-[5]'>
                        <p className='text-[13px] text-[#878787] mb-[9px]'>HELP</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Payments</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Shipping</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Cancellation & Returns</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>FAQ</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Report Infringement</p>
                    </div>
                    <div className='grow-[5]'>
                        <p className='text-[13px] text-[#878787] mb-[9px]'>POLICY</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Return Policy</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Terms Of Use</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Security</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Privacy</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Sitemap</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>EPR Compliance</p>
                    </div>
                    <div className='grow-[5]'>
                        <p className='text-[13px] text-[#878787] mb-[9px]'>SOCIAL</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Facebook</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>Twitter</p>
                        <p className='hover:underline text-white text-[12px] leading-6 cursor-pointer'>YouTube</p>
                    </div>
                    <div className='grow-[0.5] h-32 pl-7 border-l-[0.5px] border-[#454D5E]'>
                        <p className='text-[12px] text-[#878787] mb-[9px]'>Mail Us:</p>
                        <p className='text-white text-[12px]'>Flipkart Internet Private Limited,</p>
                        <p className='text-white text-[12px]'>Buildings Alyssa, Begonia &</p>
                        <p className='text-white text-[12px]'>Clove Embassy Tech Village,</p>
                        <p className='text-white text-[12px]'>Outer Ring Road, Devarabeesanahalli Village,</p>
                        <p className='text-white text-[12px]'>Bengaluru, 560103,</p>
                        <p className='text-white text-[12px]'>Karnataka, India</p>
                    </div>
                    <div className='grow-[0.5] pl-7 '>
                        <p className='text-[12px] text-[#878787] mb-[9px]'>Registered Office Address:</p>
                        <p className='text-white text-[12px]'>Flipkart Internet Private Limited,</p>
                        <p className='text-white text-[12px]'>Buildings Alyssa, Begonia &</p>
                        <p className='text-white text-[12px]'>Clove Embassy Tech Village,</p>
                        <p className='text-white text-[12px]'>Outer Ring Road, Devarabeesanahalli Village,</p>
                        <p className='text-white text-[12px]'>Bengaluru, 560103,</p>
                        <p className='text-white text-[12px]'>Karnataka, India</p>
                        <p className='text-white text-[12px]'>CIN : U51109KA2012PTC066107</p>
                        <p className='text-white text-[12px]'>Telephone: <span className='text-[#2874f0]'>044-45614700</span></p>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly items-center py-[25px]'>
                <div className='flex items-center'>
                    <img className='w-4 mr-2 mb-1' src={bag}/>
                    <p className='text-white text-[14px] cursor-pointer'>Become a Seller</p>
                </div>
                <div className='flex items-center'>
                    <img className='w-4 mr-2 mb-1' src={star} />
                    <p className='text-white text-[14px] cursor-pointer'>Advertise</p>
                </div>
                <div className='flex items-center'>
                    <img className='w-4 mr-2 mb-1' src={gift} />
                    <p className='text-white text-[14px] cursor-pointer'>Gift Cards</p>
                </div>
                <div className='flex items-center'>
                    <img className='w-4 mr-2 mb-1' src={question} />
                    <p className='text-white text-[14px] cursor-pointer'>Help Center</p>
                </div>
                <div>
                    <p className='text-white text-[14px]'><FontAwesomeIcon icon={faCopyright} /> 2007-{year} E-kart.com</p>
                </div>
                <div>
                    <img src={cards} />
                </div>
            </div>
        </div>
    );
};

export default Footer;