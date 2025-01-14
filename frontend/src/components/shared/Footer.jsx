import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-gray-700 text-gray-400 sm:py-10 py-6 lg:px-10 mt-10 w-full">
            <div className="mx-auto py-10 px-4 sm:px-10 lg:px-16">
                {/* Top Section */}
                <div className="pb-4 mb-4 border-b border-yellow-500/50">
                    <div className="flex flex-wrap justify-between items-center">
                        {/* Logo Section */}
                        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                            <a href="#">
                                <h1 className="text-yellow-500 text-2xl font-bold">FLOWRA</h1>
                                <p className="text-gray-500">Menstrual Cups</p>
                            </a>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Section 1 */}
                    <div>
                        <h4 className="text-white text-lg mb-3">Why People Like us!</h4>
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
                    
                    {/* Section 3 */}
                    <div>
                        <h4 className="text-white text-lg mb-3">Account</h4>
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
                    {/* Section 4 */}
                    <div>
                        <h4 className="text-white text-lg mb-3">Contact</h4>
                        <div className='flex gap-3 items-center text-lg my-1'>
                            <IoIosMail className='text-2xl text-secondary' />
                            <p>trynutritions@gmail.com</p>
                        </div>
                        <div className='flex gap-3 items-center text-lg'>
                            <FaPhoneAlt className='text-lg text-secondary' />
                            <p>+91 23 4567 8910</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;