import React from 'react';
import './SecondNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Play from './Images/Play.png';

const SecondNav = () => {
    return (
        <div className=' pr-12 shadow-black h-[41px] min-w-[1500px] border-b border-[#D1D3D5]'>
            <div className=' cursor-pointer max-w-[1248px] flex items-center w-5/6 mx-auto h-[40px]'>
                <div className='grow relative group'>
                    <p className='text-sm group-hover:text-[#1e70f3] text-[#212121] h-[41px] flex items-center justify-center font-semibold'>Electronics <FontAwesomeIcon className='group-hover:text-[#1e70f3] group-hover:rotate-[-180deg] duration-100 text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='absolute top-[40px] w-[1250px] hidden group-hover:flex shadow shadow-gray-400 rounded-sm flex'>
                        <div className='bg-white rounded-l-sm grow w-full'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Mobiles <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Mi</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Realme</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Samsung</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Infinix</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>OPPO</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Apple</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Vivo</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Honor</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Asus</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Poco X2</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Realme Narzo 10</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Infinix Hot 9</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>IQOO 3</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>iPhone SE</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Motorola razr</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Realme Narzo 10A</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Motorola g8 power lite</p>
                        </div>
                        <div className='bg-[#F9F9F9] grow w-full'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Mobile Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Mobile Cases</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Headphones & Headsets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Power Banks</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Screenguards</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Memory Cards</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Smart Headphones</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Mobile Cables</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Mobile Chargers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Mobile Holders</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Smart Wearable Tech <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Smart Watches</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Smart Glasses (VR)</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Smart Bands</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Health Care Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Bp Monitors</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Weighing Scale</p>
                        </div>
                        <div className='bg-white grow w-full'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Laptops <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Gaming Laptops</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Desktop PCs <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Gaming & Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Computer Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>External Hard Disks</p>
                            <p className='sub-p text-[#7d7d7d] text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Pendrives</p>
                            <p className='sub-p text-[#7d7d7d] text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Laptop Skins & Decals</p>
                            <p className='sub-p text-[#7d7d7d] text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Laptop Bags</p>
                            <p className='sub-p text-[#7d7d7d] text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Mouse</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Computer Peripherals <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Printers & Ink Cartridges</p>
                            <p className='sub-p text-[#7d7d7d] text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Monitors</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Tablets <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Apple iPads</p>
                        </div>
                        <div className='bg-[#F9F9F9] grow w-full'>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Televisions</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Speakers <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Home Audio Speakers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Home Theatres</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Soundbars</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Bluetooth Speakers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>DTH Set Top Box</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Smart Home Automation <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Google Nest</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Camera <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>DSLR & Mirrorless</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Compact & Bridge Cameras</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sports & Action</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Camera Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Lens</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Tripods</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Network Components <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 pt-1.5 pb-5  text-xs font-medium'>Routers</p>
                        </div>
                        <div className='bg-white rounded-r-sm grow w-full'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Featured</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Google Assistant Store</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Laptops on Buyback Guarantee</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Flipkart SmartBuy</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Li-Polymer Power Banks</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Sony PS4 Pro & Slim</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Apple Products</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Microsoft Store</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Lenovo Phab Series</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>JBL Speakers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Smartphones On Buyback Guarantee</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Philips</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Dr. Morepen</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Complete Mobile Protection</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Mobiles No Cost EMI</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Huawei Watch Gt 2e Smart Watch</p>
                        </div>
                    </div>
                </div>
                <div className='grow relative group'>
                    <p className='text-sm group-hover:text-[#1e70f3] text-[#212121] h-[41px] flex items-center justify-center font-semibold'>TVs & Appliances <FontAwesomeIcon className='second-nav-text-icon group-hover:text-[#1e70f3] group-hover:rotate-[-180deg] duration-100 text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='absolute top-[40px] w-[1250px] hidden shadow shadow-gray-400 rounded-sm sub-nav-div top-[40px] left-[-132px] flex group-hover:flex'>
                        <div className=' grow bg-white rounded-l-sm grow w-full'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Television <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>New Launches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Smart & Ultra HD <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Top Brands </p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Mi</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Vu</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Thomson</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Samsung</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>iFFALCON by TCL</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Nokia</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Apple</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>LG</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>realme</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Motorola</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Shop by Screen Size </p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>24 & below</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>28 - 32</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>39 - 43</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>48 - 55</p>
                            <p className='sub-p text-[#7d7d7d] px-5 pt-1.5 pb-5  text-xs font-medium'>60 & above</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9] grow w-full'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Washing Machine <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Fully Automatic Front Load</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Semi Automatic Top Load</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Fully Automatic Top Load</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Air Conditioners <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Inverter AC</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Split ACs</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Window ACs</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Shop By Brand </p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>LG</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Hitachi</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Carrier</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Refrigerators <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Single Door</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Double Door</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Triple door</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Side by Side</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Convertible</p>
                        </div>
                        <div className=' grow bg-white grow w-full'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Kitchen Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Microwave Ovens</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Oven Toaster Grills (OTG)</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Juicer/Mixer/Grinder</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Electric Kettle</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Induction Cooktops</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Chimneys</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Hand Blenders</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sandwich Makers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Pop Up Toasters</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Electric Cookers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Wet Grinders</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Food Processors</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Coffee Makers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dishwashers</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Healthy Living Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow bg-[#F9F9F9] grow w-full'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Small Home Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Irons</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Water Purifiers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Fans</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Air Coolers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Inverters</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Vacuum Cleaners</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sewing Machines</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Voltage Stabilizers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Water Geysers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Immersion Rods</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Top Brands </p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Livpure</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Philips</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Bajaj</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>IFB</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Eureka Forbes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Kaff</p>
                        </div>
                        <div className=' grow bg-white rounded-r-sm grow w-full'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Buying Guides</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Televisions</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Washing Machines</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Refrigerators</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Air Conditioners</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Water Purifiers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Air Purifiers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Chimneys</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Water Geysers</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>New Launches</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Coocaa Smart TVs</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Nokia (55) 4K Android TV</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Mi (32) 4A Pro Android TV</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>MarQ (43) FHD Smart TV</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>LG Refrigerators</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Thomson (40) 4K Smart TV</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Whirlpool Refrigerators</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Kodak (22) | (32) LED TVs</p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow relative group'>
                    <p className='text-sm nav-p group-hover:text-[#1e70f3] text-[#212121] h-[41px] flex items-center justify-center font-semibold'>Men <FontAwesomeIcon className='second-nav-text-icon group-hover:text-[#1e70f3] group-hover:rotate-[-180deg] duration-100 text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='absolute top-[40px] w-[1250px] hidden shadow shadow-gray-400 rounded-sm sub-nav-div flex top-[40px] left-[-306px] group-hover:flex'>
                        <div className=' grow w-full bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Footwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sports Shoes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Casual Shoes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Formal Shoes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sandals & Floaters</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Flip- Flops</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Loafers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Boots</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Running Shoes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sneakers</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Men's Grooming <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Deodorants</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Perfumes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Beard Care & Grooming</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shaving & Aftershave</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sexual Wellness</p>
                        </div>
                        <div className=' grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Top wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>T-Shirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Formal Shirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Casual Shirts</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Bottom wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Jeans</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Casual Trousers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Formal Trousers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Track pants</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shorts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Cargos</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Three Fourths</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Suits, Blazers & Waistcoats <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Ties, Socks, Caps & More <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Fabrics <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow w-full bg-white'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Winter Wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Sweatshirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Jackets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Sweater</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Tracksuits</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Ethnic wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Kurta</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Ethnic Sets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Sherwanis</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Ethnic Pyjama</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Dhoti</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Lungi</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Innerwear & Loungewear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Briefs & Trunks</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Vests</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Boxers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Pyjamas and Lounge Pants</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Thermals</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Night Suits</p>
                            <p className='flex font-medium items-center text-[13px] px-5 pt-2 pb-5'>Raincoats & Windcheaters <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Watches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Fastrack</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Casio</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Titan</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Fossil</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sonata</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Backpacks</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Wallets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Belts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sunglasses</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Luggage & Travel</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Frames</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Jewellery</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Sports & Fitness Store <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow w-full bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Smart Watches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Smart Bands <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Personal Care Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Trimmers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Shavers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Grooming Kits</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Featured</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Watches Store</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Footwear Club</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Bags & Wallet</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>T-Shirt Store</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Adidas</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Beardo</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Reebok</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Skechers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Nike</p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow relative group'>
                    <p className='text-sm nav-p group-hover:text-[#1e70f3] text-[#212121] h-[41px] flex items-center justify-center font-semibold'>Women <FontAwesomeIcon className='second-nav-text-icon group-hover:text-[#1e70f3] group-hover:rotate-[-180deg] duration-100 text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='group-hover:flex absolute top-[40px] w-[1250px] hidden  shadow shadow-gray-400 rounded-sm sub-nav-div flex top-[40px] left-[-399px]'>
                        <div className=' grow w-full bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Women Western & Maternity Wear</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Topwear</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dresses</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Jeans</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shorts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Skirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Jeggings & Tights</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Trousers & Capris</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Lingerie & Sleepwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Bras</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Panties</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Lingerie Sets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Night Dresses & Nighties</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shapewear</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Camisoles & Slips</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Swim & Beachwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Party Dresses <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Sports Wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Winter Wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Ethnic Wear</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sarees</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Kurtas & Kurtis</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dress Material</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Lehenga Choli</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Blouse</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Kurta Sets & Salwar Suits</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Gowns</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dupattas</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Ethnic Bottoms </p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Leggings & Churidars</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Palazzos</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shararas</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Salwars & Patiala</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dhoti Pants</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Ethnic Trousers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Saree Shapewear & Petticoats</p>
                        </div>
                        <div className=' grow w-full bg-white'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Footwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Sandals <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Flats</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Heels</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Wedges</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Shoes <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Sports Shoes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Casual Shoes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Boots</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Ballerinas <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Slippers & Flip- Flop's <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Watches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Smart Watches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Personal Care Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Hair Straightners</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Hair Dryers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Epilators</p>
                        </div>
                        <div className=' grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Beauty & Grooming <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Make Up</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Skin Care</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Hair Care</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Bath & Spa</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Deodorants & Perfumes</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Jewellery <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Artificial Jewellery</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Silver Jewellery</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Precious Jewellery</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Coins and Bars</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Handbags</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shoulder Bags</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Totes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sling bags</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Clutches</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Wallets & Belts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Luggage & Travel</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sunglasses</p>
                            <p className='sub-p text-[#7d7d7d] px-5 pt-1.5 pb-5  text-xs font-medium'>Frames</p>
                        </div>
                        <div className=' grow w-full bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Featured</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Forever 21</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Accessorize</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>W</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Pantaloons</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Chemistry</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Lakme</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Nivea</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Catwalk</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Titan-Raga</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Fastrack</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Divastri</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Rare Roots</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Anmi</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Coins & Bars</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Crocs</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Trending today!</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Ruffles & Frills</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Pastel Kurtas & Kurtis</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Designer Net Sarees</p>
                            
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow relative group'>
                    <p className='flex items-center justify-center text-sm nav-p group-hover:text-[#1e70f3] text-[#212121] h-[41px] font-semibold'>Baby & Kids <FontAwesomeIcon className='second-nav-text-icon group-hover:text-[#1e70f3] group-hover:rotate-[-180deg] duration-100 text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='group-hover:flex absolute top-[40px] w-[1250px] hidden shadow shadow-gray-400 rounded-sm sub-nav-div flex top-[40px] left-[-513px]'>
                        <div className=' grow w-full bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Kids Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Boys' Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>T-Shirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Ethnic Wear</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shorts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Innerwear</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Girls' Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dresses & Skirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Ethnic Wear</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>T-shirts & Tops</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Innerwear</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Baby Boys' Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Combos Sets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>T-Shirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Innerwear</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Mobiles <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Combos Sets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dresses & Gowns</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Innerwear</p>
                        </div>
                        <div className=' grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Kids' Footwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Boys' Footwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sandals</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sport Shoes</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Girls' Footwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Flats & Bellies</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sport Shoes</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Infant Footwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Character Shoes <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Kids' Watches</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Kids' Sunglasses</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Kids' Winter Wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Boys' Winter Wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Boys' Sweatshirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Boys' Jacket</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Girls' Winter Wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Girls' Sweatshirts</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Girls' Jackets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Infant Winter Wear</p>
                            <p className='sub-p text-[#7d7d7d] px-5 pt-1.5 pb-5  text-xs font-medium'>Thermals</p>
                        </div>
                        <div className=' grow w-full bg-white'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Toys <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Remote Control Toys</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Educational Toys</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Soft Toys</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Cars & Die-cast Vehicles</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Outdoor Toys</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Action Figures</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Board Games</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Musical Toys</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Dolls & Doll Houses</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Puzzles</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>S.T.E.M Toys</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Helicopter & Drones</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Toy Guns</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Party Supplies</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>School Supplies <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>School Bags</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>School Combo Sets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Lunch Box</p>
                        </div>
                        <div className=' grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Baby Care <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Diapers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Wipes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Diapering & Potty Training</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Bath, Hair & Skin Care</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Grooming</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Bathing Accessories</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Gift Sets & Combo</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Oral Care</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Nursing & Breast Feeding</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Food</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Feeding Bottle & Accessories</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Feeding Utensils & Accessories</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Bedding</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Gear</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Medical & Health Care</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Proofing & Safety</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Baby Cleaners & Detergents</p>
                        </div>
                        <div className=' grow w-full bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Featured brands</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Miss & Chief</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Barbie</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Disney</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>United Colors of Benetton</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>The Children's Place</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>US Polo</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Flying Machine</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Crocs</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Puma</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Funskool</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Lego</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Luvlap</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Mamy Poko</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Mee Mee</p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow relative group'>
                    <p className='flex items-center justify-center text-sm nav-p group-hover:text-[#1e70f3] text-[#212121] h-[41px] font-semibold'>Home & Furniture <FontAwesomeIcon className='second-nav-text-icon group-hover:text-[#1e70f3] group-hover:rotate-[-180deg] duration-100 text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='group-hover:flex absolute top-[40px] w-[1250px] hidden shadow shadow-gray-400 rounded-sm sub-nav-div flex top-[40px] left-[-653px]'>
                        <div className=' grow w-full bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Kitchen, Cookware & Serveware <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Pans</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Tawas</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Pressure Cookers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Kitchen tools</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Gas Stoves</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Tableware & Dinnerware <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Coffee Mugs</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dinner Set</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Barware</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Kitchen Storage <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Water Bottles</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Lunch Boxes</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Flasks</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Casseroles</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Kitchen Containers</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Cleaning Supplies <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Furniture Top Offers <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Bed Room Furniture <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>                            
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Beds</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Mattresses</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Wardrobes</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Living Room Furniture <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sofa</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sofa Beds</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>TV Units</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dining Tables & Chairs</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Coffee Tables</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shoe Racks</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Office & Study Furniture <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Kids Room Furniture</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>DIY Furniture</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Bean Bags</p>
                            <p className='sub-p text-[#7d7d7d] px-5 pt-1.5 pb-5  text-xs font-medium'>Collapsible Wardrobes</p>
                        </div>
                        <div className=' grow w-full bg-white'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Furnishing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Bedsheets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Curtains</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Cushions & Pillows</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Blankets</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Bath Towels</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Kitchen & Table Linen</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Floor Coverings</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Smart Home Automation <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Smart Security System</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Smart Door Locks</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Home Improvement <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Tools & Measuring Equipments</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Home Utilities & Organizers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Lawn & Gardening</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Bathroom & Kitchen Fittings</p>
                        </div>
                        <div className=' grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Home Decor <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Paintings</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Clocks</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Wall Shelves</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Stickers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Showpieces & Figurines</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Home Lighting <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Bulbs</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Wall Lamp</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Table Lamp</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Ceiling Lamp</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Emergency Lights</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Festive Decor & Gifts <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Pet Supplies <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dogs</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Cats</p>
                            <p className='sub-p text-[#7d7d7d] px-5 pt-1.5 pb-5  text-xs font-medium'>Fish & Aquatics</p>
                        </div>
                        <div className=' grow w-full bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Durability Certified Furniture <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Featured</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Christmas Store <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Mugs Store</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Gardening Store <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Stainless Steel Store</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Milton</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Bombay Dyeing</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>@home</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>HomeTown</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Ajanta</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Spaces by Welspun</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Prestige</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Perfect Home Store <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow relative group'>
                    <p className='flex items-center justify-center text-sm nav-p group-hover:text-[#1e70f3] text-[#212121] h-[41px] font-semibold'>Sports, Books & More <FontAwesomeIcon className='second-nav-text-icon group-hover:text-[#1e70f3] group-hover:rotate-[-180deg] duration-100 text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='group-hover:flex flex absolute top-[40px] left-[-832px] w-[1250px] hidden shadow shadow-gray-400 rounded-sm z-10 sub-nav-div'>
                        <div className='grow w-full bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Sports <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Cricket</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Badminton</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Cycling</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Football</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Skating</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Camping & Hiking</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Swimming</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Exercise Fitness <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Cardio EquipmentonorH</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Home Gyms</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Support</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Dumbbells</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Ab Exercisers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Shakers & Sippers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Yoga Mat</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Gym Gloves</p>
                        </div>
                        <div className='grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Food Essentialsies <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Nuts & Dry Fruits</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Tea, Coffee and Beverages</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Chocolates</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Snacks Corner</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Gifting Combos</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Sweets Store</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Jams, Spreads and Honey</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Breakfast Items</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Health & Nutrition </p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>All Supplements</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Protein Supplements</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Vitamin Supplements</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Health Drinks</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Ayurvedic Supplements</p>
                        </div>
                        <div className=' grow w-full bg-white'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Books <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Entrance Exams</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Academics</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Literature & Fiction</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Non Fiction</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Young Readers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Self-Help</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>E-Learning</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Preorders</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Indian Languages</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Stationery <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Pens</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Diaries</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Card Holders</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Desk Organizers</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5 text-xs font-medium'>Calculators</p>
                            <p className='sub-p text-[#7d7d7d] px-5 pt-1.5 pb-5 text-xs font-medium'>Key Chains</p>
                        </div>
                        <div className=' grow w-full bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Auto Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Helmets & Riding Gears</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Car Audio/Video</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Car Mobile Accessories</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Car & Bike Care</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Vehicle Lubricants</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Industrial & Scientific tools <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Industrial Measurement Devices</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Industrial Testing Devices</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Lab & Scientific Products</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Packaging & Shipping Products</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Safety Products</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Medical Supplies </p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Pregnancy and Fertility Kits</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-1.5  text-xs font-medium'>Hot Water Bag</p>
                        </div>
                        <div className=' grow w-full bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Music</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Musical Instruments</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Music</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Movies & Tv shows</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Gaming</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Gaming Consoles</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Gaming Accessories</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>PS4 Games</p>
                            <p className='sub-p text-[#7d7d7d] px-5 py-2  text-xs font-medium'>Smart Glasses (VR)</p>
                            <p className='flex font-medium items-center text-[13px] px-5 py-2'>Grocery (Only in Select Cities) <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow group'>
                    <p className='text-sm nav-p group-hover:text-[#1e70f3] text-[#212121] h-[41px] flex items-center justify-center font-semibold'>Flights</p>
                </div>
                <div className=' div-1 grow group'>
                    <p className='text-sm nav-p group-hover:text-[#1e70f3] text-[#212121] h-[41px] flex items-center justify-center font-semibold'>Offer Zone</p>
                </div>
            </div>
        </div>
    );
};

export default SecondNav;