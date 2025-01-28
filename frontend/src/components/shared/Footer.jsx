import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import flowraLogo from '../../assets/images/FlowraLogo.png';

const Footer = () => {
    return (
        <div 
            style={{ backgroundImage: 'linear-gradient(#FDECF0 40%, #F598A6 120%)' }}
            className="text-brown sm:pt-10 pt-6 lg:px-10 w-full"
        >
            <div className="mx-auto py-10 px-4 sm:px-10 lg:px-16">
                {/* Top Section */}
                <div className="pb-4 mb-4 border-b border-yellow-500/50">
                    <div className="flex  justify-between items-center ">
                        {/* Logo Section */}
                        <div className="w-full lg:w-1/4 mb-4 lg:mb-0 sm:mt-0 mt-3">
                            <Link to={'/flowra'}>
                                <img 
                                    src={flowraLogo} 
                                    alt="Flowra Logo" 
                                    className='lg:h-12 sm:h-10 h-8'
                                />
                            </Link>
                        </div>
                        {/* Social Icons */}
                        <div className="w-full lg:w-1/4 flex justify-end space-x-3">
                            <a
                                className="p-2 border border-gray-500 rounded-full hover:text-white hover:border-white"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className='text-2xl font-semibold' />
                            </a>
                            <a
                                className="p-2 border border-gray-500 rounded-full text-gray-400 hover:text-white hover:border-white"
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className='text-2xl font-semibold' />
                            </a>
                            <a
                                className="p-2 border border-gray-500 rounded-full text-gray-400 hover:text-white hover:border-white"
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className='text-2xl font-semibold' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
                    {/* Section 1 */}
                    <div className=''>
                        <h4 className="text-lg mb-3">Why People Like us!</h4>
                        <p className="mb-4">
                            TryNutrition is an innovative e-commerce website dedicated to providing a wide range of
                            nutrient-rich products.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block py-2 px-4 border border-gray-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-gray-900"
                        >
                            Read More
                        </a>
                    </div>
                    {/* Section 2 */}

                    <div className='flex flex-col lg:items-center'>
                        <div className='w-fit'>
                            <h4 className="font-semibold text-lg mb-7">Explore</h4>
                            <div className='flex gap-3 items-center text-lg my-1'>
                                <IoIosMail className='text-2xl text-secondary' />
                                <p>info@flowra.in</p>
                            </div>
                            <div className='flex gap-3 items-center text-lg'>
                                <FaPhoneAlt className='text-lg text-secondary' />
                                <p>+91 98754 32100</p>
                            </div>
                            <div className='flex gap-3 items-center text-lg'>
                                <FaPhoneAlt className='text-lg text-secondary' />
                                <p>Kozhikode, Kerala, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className='flex flex-col lg:items-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-7">Account</h4>
                            <div className="flex flex-col space-y-2">
                                <a className="hover:text-white" href="/">
                                    Home
                                </a>
                                <a className="hover:text-white" href="/myAccount">
                                    My Account
                                </a>
                                <a className="hover:text-white" href="/shop">
                                    Shop details
                                </a>
                                <a className="hover:text-white" href="/cart">
                                    Shopping Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Section 4 */}
                    <div className='flex flex-col lg:items-center'>
                        <div>
                            <h4 className="font-semibold text-lg mb-7" >Contact</h4>
                            <div className='flex gap-3 items-center text-lg my-1'>
                                <IoIosMail className='text-2xl ' />
                                <p>trynutritions@gmail.com</p>
                            </div>
                            <div className='flex gap-3 items-center text-lg'>
                                <FaPhoneAlt className='text-lg ' />
                                <p>+91 23 4567 8910</p>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <a
                                    className="p-2 border border-gray-500 rounded-full hover:text-white hover:border-white"
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className='text-2xl font-semibold' />
                                </a>
                                <a
                                    className="p-2 border border-gray-500 rounded-full text-gray-400 hover:text-white hover:border-white"
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook className='text-2xl font-semibold' />
                                </a>
                                <a
                                    className="p-2 border border-gray-500 rounded-full text-gray-400 hover:text-white hover:border-white"
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className='text-2xl font-semibold' />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='lg:mt-20 mt-10 text-lg text-center lg:text-start'>
                    <p>
                        ©flowra.in 
                        <span className='mx-3'>Powered by Fica Ads</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;