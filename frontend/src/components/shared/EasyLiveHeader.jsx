import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import easyLiveNavOptions from '../../data/easyLiveNavOptions';

const EasyLiveHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="relative">
            {/* Background placeholder for fixed header */}
            <div className="h-24  bg-easy-primary-light"></div>

            <div className="w-11/12 mx-auto sm:px-4 lg:px-7">
                <div className="flex items-center justify-between h-24 absolute top-0 lg:right-20 lg:left-20 left-8 right-8">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/" className="text-2xl font-bold text-dark-green">
                            Logo
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6 text-lg text-dark-green font-medium">
                        {easyLiveNavOptions.map((option) => (
                            <NavLink
                                key={option.name}
                                to={option.link}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? "text-primary font-semibold" : "hover:text-primary"
                                    }`
                                }
                            >
                                {option.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Login and Cart */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <NavLink
                            to="/login"
                            className="px-4 py-2 rounded-md text-dark-green hover:text-white transition duration-200"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className="text-2xl text-gray-700 hover:text-secondary transition duration-200"
                        >
                            <HiOutlineShoppingBag />
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            className="p-2 rounded-md focus:outline-none hover:text-secondary"
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <svg
                                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={
                                        isMobileMenuOpen
                                            ? "M6 18L18 6M6 6l12 12" // Close icon
                                            : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out bg-gray-100 lg:hidden ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="px-6 py-4 space-y-3">
                    {easyLiveNavOptions.map((option) => (
                        <NavLink
                            key={option.name}
                            to={option.link}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive ? "text-secondary font-semibold" : "text-gray-700 hover:text-secondary"
                                }`
                            }
                            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                        >
                            {option.name}
                        </NavLink>
                    ))}

                    {/* Login Button for Mobile */}
                    <NavLink
                        to="/login"
                        className="block px-4 py-2 rounded-md bg-primary text-white hover:bg-secondary transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Login
                    </NavLink>

                    {/* Cart Button for Mobile */}
                    <NavLink
                        to="/cart"
                        className="block px-4 py-2 rounded-md text-gray-700 hover:bg-secondary-light transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <HiOutlineShoppingBag className="inline mr-2" />
                        Cart
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default EasyLiveHeader;