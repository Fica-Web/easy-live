import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import navOptions from '../../data/navOptions';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="">
            <div className="w-full mx-auto px-4 sm:px-10 lg:px-16">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/" className="text-xl font-bold">
                            <h2 className="text-2xl">logo</h2>
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:space-x-6 space-x-2 items-center">
                        {navOptions.map((option) => (
                            <NavLink
                                key={option.name}
                                to={option.link}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-secondary" : "hover:text-secondary"
                                    }`
                                }
                            >
                                {option.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Login and Cart */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Login Button */}
                        <NavLink
                            to="/login"
                            className="px-4 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-secondary-dark"
                        >
                            Login
                        </NavLink>
                        {/* Cart Icon */}
                        <NavLink to="/cart" className="text-2xl text-gray-700 hover:text-secondary">
                            <HiOutlineShoppingBag />
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            className="hover:text-secondary p-2 rounded-md"
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <svg
                                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""
                                    }`}
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
                className={`overflow-hidden transition-[max-height] duration-700 ease-in-out bg-gray-100 ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="px-4 py-2 space-y-2">
                    {navOptions.map((option) => (
                        <NavLink
                            key={option.name}
                            to={option.link}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-secondary" : "text-primary hover:text-secondary"
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
                        className="block px-4 py-2 rounded-md bg-secondary text-white hover:bg-secondary-dark"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Login
                    </NavLink>
                    {/* Cart Button for Mobile */}
                    <NavLink
                        to="/cart"
                        className="block px-4 py-2 rounded-md text-gray-700 hover:bg-secondary"
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

export default Navbar;