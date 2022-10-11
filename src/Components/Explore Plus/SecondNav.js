import React from 'react';
import './SecondNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Play from './Images/Play.png';

const SecondNav = () => {
    return (
        <div className='second-nav-container pr-12 shadow-black z-0'>
            <div className=' cursor-pointer second-sub-nav flex items-center w-5/6 mx-auto h-[40px]'>
                <div className='div-1 grow first-div'>
                    <p className='text-sm nav-p font-semibold'>Electronics <FontAwesomeIcon className='second-nav-text-icon text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='shadow shadow-gray-400 rounded-sm sub-nav-div flex'>
                        <div className=' grow bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Mobiles <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mi</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Realme</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Samsung</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Infinix</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>OPPO</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Apple</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Vivo</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Honor</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Asus</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Poco X2</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Realme Narzo 10</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Infinix Hot 9</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>IQOO 3</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>iPhone SE</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Motorola razr</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Realme Narzo 10A</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Motorola g8 power lite</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Mobile Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Cases</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Headphones & Headsets</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Power Banks</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Screenguards</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Memory Cards</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Headphones</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Cables</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Chargers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Holders</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Wearable Tech <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Watches</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Glasses (VR)</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Bands</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Health Care Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bp Monitors</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Weighing Scale</p>
                        </div>
                        <div className=' grow bg-white'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Laptops <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Gaming Laptops</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Desktop PCs <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Gaming & Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Computer Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>External Hard Disks</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Pendrives</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Laptop Skins & Decals</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Laptop Bags</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mouse</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Computer Peripherals <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Printers & Ink Cartridges</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Monitors</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Tablets <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Apple iPads</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Televisions</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Speakers <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Home Audio Speakers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Home Theatres</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Soundbars</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bluetooth Speakers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>DTH Set Top Box</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Home Automation <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Google Nest</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Camera <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>DSLR & Mirrorless</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Compact & Bridge Cameras</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sports & Action</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Camera Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Lens</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Tripods</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Network Components <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 pt-1.5 pb-5  text-xs font-medium'>Routers</p>
                        </div>
                        <div className=' grow bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Featured</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Google Assistant Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Laptops on Buyback Guarantee</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Flipkart SmartBuy</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Li-Polymer Power Banks</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Sony PS4 Pro & Slim</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Apple Products</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Microsoft Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Lenovo Phab Series</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>JBL Speakers</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Smartphones On Buyback Guarantee</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Philips</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Dr. Morepen</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Complete Mobile Protection</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Mobiles No Cost EMI</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Huawei Watch Gt 2e Smart Watch</p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow second-div'>
                    <p className='text-sm nav-p font-semibold'>TVs & Appliances <FontAwesomeIcon className='second-nav-text-icon text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='shadow shadow-gray-400 rounded-sm sub-nav-div special-1 flex'>
                        <div className=' grow bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Television <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>New Launches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart & Ultra HD <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Top Brands </p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mi</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Vu</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Thomson</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Samsung</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>iFFALCON by TCL</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Nokia</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Apple</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>LG</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>realme</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Motorola</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Shop by Screen Size </p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>24 & below</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>28 - 32</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>39 - 43</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>48 - 55</p>
                            <p className='sub-p px-5 pt-1.5 pb-5  text-xs font-medium'>60 & above</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Washing Machine <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Fully Automatic Front Load</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Semi Automatic Top Load</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Fully Automatic Top Load</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Air Conditioners <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Inverter AC</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Split ACs</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Window ACs</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Shop By Brand </p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>LG</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Hitachi</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Carrier</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Refrigerators <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Single Door</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Double Door</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Triple door</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Side by Side</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Convertible</p>
                        </div>
                        <div className=' grow bg-white'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Kitchen Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Microwave Ovens</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Oven Toaster Grills (OTG)</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Juicer/Mixer/Grinder</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Electric Kettle</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Induction Cooktops</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Chimneys</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Hand Blenders</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sandwich Makers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Pop Up Toasters</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Electric Cookers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Wet Grinders</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Food Processors</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Coffee Makers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Dishwashers</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Healthy Living Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Small Home Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Irons</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Water Purifiers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Fans</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Air Coolers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Inverters</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Vacuum Cleaners</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sewing Machines</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Voltage Stabilizers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Water Geysers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Immersion Rods</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Top Brands </p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Livpure</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Philips</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bajaj</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>IFB</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Eureka Forbes</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Kaff</p>
                        </div>
                        <div className=' grow bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Buying Guides</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Televisions</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Washing Machines</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Refrigerators</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Air Conditioners</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Water Purifiers</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Air Purifiers</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Chimneys</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Water Geysers</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>New Launches</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Coocaa Smart TVs</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Nokia (55) 4K Android TV</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Mi (32) 4A Pro Android TV</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>MarQ (43) FHD Smart TV</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>LG Refrigerators</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Thomson (40) 4K Smart TV</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Whirlpool Refrigerators</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Kodak (22) | (32) LED TVs</p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow third-div'>
                    <p className='text-sm nav-p font-semibold'>Men <FontAwesomeIcon className='second-nav-text-icon text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='special-2 shadow shadow-gray-400 rounded-sm sub-nav-div flex'>
                        <div className=' grow bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Footwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sports Shoes</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Casual Shoes</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Formal Shoes</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sandals & Floaters</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Flip- Flops</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Loafers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Boots</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Running Shoes</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sneakers</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Men's Grooming <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Deodorants</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Perfumes</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Beard Care & Grooming</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Shaving & Aftershave</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sexual Wellness</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Top wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>T-Shirts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Formal Shirts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Casual Shirts</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Bottom wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Jeans</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Casual Trousers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Formal Trousers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Track pants</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Shorts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Cargos</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Three Fourths</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Suits, Blazers & Waistcoats <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Ties, Socks, Caps & More <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Fabrics <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow bg-white'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Winter Wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Sweatshirts</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Jackets</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Sweater</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Tracksuits</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Ethnic wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Kurta</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Ethnic Sets</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Sherwanis</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Ethnic Pyjama</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Dhoti</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Lungi</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Innerwear & Loungewear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Briefs & Trunks</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Vests</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Boxers</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Pyjamas and Lounge Pants</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Thermals</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Night Suits</p>
                            <p className='flex font-medium items-center text-sm px-5 pt-2 pb-5'>Raincoats & Windcheaters <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Watches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Fastrack</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Casio</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Titan</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Fossil</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sonata</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Backpacks</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Wallets</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Belts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sunglasses</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Luggage & Travel</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Frames</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Jewellery</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Sports & Fitness Store <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Watches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Bands <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Personal Care Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Trimmers</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Shavers</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Grooming Kits</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Featured</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Watches Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Footwear Club</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Bags & Wallet</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>T-Shirt Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Adidas</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Beardo</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Reebok</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Skechers</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Nike</p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow fourth-div'>
                    <p className='text-sm nav-p font-semibold'>Women <FontAwesomeIcon className='second-nav-text-icon text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='special-3 shadow shadow-gray-400 rounded-sm sub-nav-div flex'>
                        <div className=' grow bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Women Western & Maternity Wear</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Topwear</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Dresses</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Jeans</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Shorts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Skirts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Jeggings & Tights</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Trousers & Capris</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Lingerie & Sleepwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bras</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Panties</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Lingerie Sets</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Night Dresses & Nighties</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Shapewear</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Camisoles & Slips</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Swim & Beachwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Party Dresses <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Sports Wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Winter Wear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Ethnic Wear</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sarees</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Kurtas & Kurtis</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Dress Material</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Lehenga Choli</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Blouse</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Kurta Sets & Salwar Suits</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Gowns</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Dupattas</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Ethnic Bottoms </p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Leggings & Churidars</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Palazzos</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Shararas</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Salwars & Patiala</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Dhoti Pants</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Ethnic Trousers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Saree Shapewear & Petticoats</p>
                        </div>
                        <div className=' grow bg-white'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Footwear <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Sandals <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Flats</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Heels</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Wedges</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Shoes <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Sports Shoes</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Casual Shoes</p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Boots</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Ballerinas <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Slippers & Flip- Flop's <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Watches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Watches <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Personal Care Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Hair Straightners</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Hair Dryers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Epilators</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Beauty & Grooming <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Make Up</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Skin Care</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Hair Care</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bath & Spa</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Deodorants & Perfumes</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Jewellery <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Artificial Jewellery</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Silver Jewellery</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Precious Jewellery</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Coins and Bars</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Handbags</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Shoulder Bags</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Totes</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sling bags</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Clutches</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Wallets & Belts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Luggage & Travel</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sunglasses</p>
                            <p className='sub-p px-5 pt-1.5 pb-5  text-xs font-medium'>Frames</p>
                        </div>
                        <div className=' grow bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Featured</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Forever 21</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Accessorize</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>W</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Pantaloons</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Chemistry</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Lakme</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Nivea</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Catwalk</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Titan-Raga</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Fastrack</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Divastri</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Rare Roots</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Anmi</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Coins & Bars</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Crocs</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Trending today!</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Ruffles & Frills</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Pastel Kurtas & Kurtis</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Designer Net Sarees</p>
                            
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow fifth-div'>
                    <p className='text-sm nav-p font-semibold'>Baby & Kids <FontAwesomeIcon className='second-nav-text-icon text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='special-4 shadow shadow-gray-400 rounded-sm sub-nav-div flex'>
                        <div className=' grow bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Kids Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Boys' Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>T-Shirts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Ethnic Wear</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Shorts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Shirts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Innerwear</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Girls' Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Dresses & Skirts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Ethnic Wear</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>T-shirts & Tops</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Innerwear</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Baby Boys' Clothing <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Combos Sets</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>T-Shirts</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Innerwear</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Mobiles <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Combos Sets</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Dresses & Gowns</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Innerwear</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Mobile Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Cases</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Headphones & Headsets</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Power Banks</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Screenguards</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Memory Cards</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Headphones</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Cables</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Chargers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Holders</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Wearable Tech <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Watches</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Glasses (VR)</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Bands</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Health Care Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bp Monitors</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Weighing Scale</p>
                        </div>
                        <div className=' grow bg-white'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Laptops <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Gaming Laptops</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Desktop PCs <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Gaming & Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Computer Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>External Hard Disks</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Pendrives</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Laptop Skins & Decals</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Laptop Bags</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mouse</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Computer Peripherals <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Printers & Ink Cartridges</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Monitors</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Tablets <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Apple iPads</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Televisions</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Speakers <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Home Audio Speakers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Home Theatres</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Soundbars</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bluetooth Speakers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>DTH Set Top Box</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Home Automation <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Google Nest</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Camera <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>DSLR & Mirrorless</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Compact & Bridge Cameras</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sports & Action</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Camera Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Lens</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Tripods</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Network Components <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 pt-1.5 pb-5  text-xs font-medium'>Routers</p>
                        </div>
                        <div className=' grow bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Featured</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Google Assistant Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Laptops on Buyback Guarantee</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Flipkart SmartBuy</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Li-Polymer Power Banks</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Sony PS4 Pro & Slim</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Apple Products</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Microsoft Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Lenovo Phab Series</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>JBL Speakers</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Smartphones On Buyback Guarantee</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Philips</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Dr. Morepen</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Complete Mobile Protection</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Mobiles No Cost EMI</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Huawei Watch Gt 2e Smart Watch</p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow sixth-div'>
                    <p className='text-sm nav-p font-semibold'>Home & Furniture <FontAwesomeIcon className='second-nav-text-icon text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='special-5 shadow shadow-gray-400 rounded-sm sub-nav-div flex'>
                        <div className=' grow bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Mobiles <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mi</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Realme</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Samsung</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Infinix</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>OPPO</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Apple</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Vivo</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Honor</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Asus</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Poco X2</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Realme Narzo 10</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Infinix Hot 9</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>IQOO 3</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>iPhone SE</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Motorola razr</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Realme Narzo 10A</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Motorola g8 power lite</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Mobile Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Cases</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Headphones & Headsets</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Power Banks</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Screenguards</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Memory Cards</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Headphones</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Cables</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Chargers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Holders</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Wearable Tech <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Watches</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Glasses (VR)</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Bands</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Health Care Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bp Monitors</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Weighing Scale</p>
                        </div>
                        <div className=' grow bg-white'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Laptops <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Gaming Laptops</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Desktop PCs <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Gaming & Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Computer Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>External Hard Disks</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Pendrives</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Laptop Skins & Decals</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Laptop Bags</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mouse</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Computer Peripherals <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Printers & Ink Cartridges</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Monitors</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Tablets <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Apple iPads</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Televisions</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Speakers <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Home Audio Speakers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Home Theatres</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Soundbars</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bluetooth Speakers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>DTH Set Top Box</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Home Automation <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Google Nest</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Camera <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>DSLR & Mirrorless</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Compact & Bridge Cameras</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sports & Action</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Camera Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Lens</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Tripods</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Network Components <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 pt-1.5 pb-5  text-xs font-medium'>Routers</p>
                        </div>
                        <div className=' grow bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Featured</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Google Assistant Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Laptops on Buyback Guarantee</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Flipkart SmartBuy</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Li-Polymer Power Banks</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Sony PS4 Pro & Slim</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Apple Products</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Microsoft Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Lenovo Phab Series</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>JBL Speakers</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Smartphones On Buyback Guarantee</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Philips</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Dr. Morepen</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Complete Mobile Protection</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Mobiles No Cost EMI</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Huawei Watch Gt 2e Smart Watch</p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow seventh-div'>
                    <p className='text-sm nav-p font-semibold'>Sports, Books & More <FontAwesomeIcon className='second-nav-text-icon text-[#b2b2b2] ml-1 w-[9px]' icon={faChevronDown} /></p>
                    <div className='special-6 shadow shadow-gray-400 rounded-sm sub-nav-div flex z-10'>
                        <div className=' grow bg-white rounded-l-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Mobiles <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mi</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Realme</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Samsung</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Infinix</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>OPPO</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Apple</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Vivo</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Honor</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Asus</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Poco X2</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Realme Narzo 10</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Infinix Hot 9</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>IQOO 3</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>iPhone SE</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Motorola razr</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Realme Narzo 10A</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Motorola g8 power lite</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Mobile Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Cases</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Headphones & Headsets</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Power Banks</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Screenguards</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Memory Cards</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Headphones</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Cables</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Chargers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mobile Holders</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Wearable Tech <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Watches</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Glasses (VR)</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Smart Bands</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Health Care Appliances <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bp Monitors</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Weighing Scale</p>
                        </div>
                        <div className=' grow bg-white'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Laptops <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5 text-xs font-medium'>Gaming Laptops</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Desktop PCs <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Gaming & Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Computer Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>External Hard Disks</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Pendrives</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Laptop Skins & Decals</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Laptop Bags</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Mouse</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Computer Peripherals <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Printers & Ink Cartridges</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Monitors</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Tablets <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Apple iPads</p>
                        </div>
                        <div className=' grow bg-[#F9F9F9]'>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Televisions</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Speakers <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Home Audio Speakers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Home Theatres</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Soundbars</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Bluetooth Speakers</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>DTH Set Top Box</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Smart Home Automation <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Google Nest</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Camera <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>DSLR & Mirrorless</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Compact & Bridge Cameras</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Sports & Action</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Camera Accessories <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Lens</p>
                            <p className='sub-p px-5 py-1.5  text-xs font-medium'>Tripods</p>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Network Components <img className='w-1.5 h-1.5 ml-2' src={Play} /></p>
                            <p className='sub-p px-5 pt-1.5 pb-5  text-xs font-medium'>Routers</p>
                        </div>
                        <div className=' grow bg-white rounded-r-sm'>
                            <p className='flex font-medium items-center text-sm px-5 py-2'>Featured</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Google Assistant Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Laptops on Buyback Guarantee</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Flipkart SmartBuy</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Li-Polymer Power Banks</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Sony PS4 Pro & Slim</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Apple Products</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Microsoft Store</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Lenovo Phab Series</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>JBL Speakers</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Smartphones On Buyback Guarantee</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Philips</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Dr. Morepen</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Complete Mobile Protection</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Mobiles No Cost EMI</p>
                            <p className='sub-p px-5 py-2  text-xs font-medium'>Huawei Watch Gt 2e Smart Watch</p>
                        </div>
                    </div>
                </div>
                <div className=' div-1 grow'>
                    <p className='text-sm nav-p font-semibold'>Flights</p>
                </div>
                <div className=' div-1 grow'>
                    <p className='text-sm nav-p font-semibold'>Offer Zone</p>
                </div>
            </div>
        </div>
    );
};

export default SecondNav;