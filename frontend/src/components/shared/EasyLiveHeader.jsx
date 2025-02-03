import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from '../../assets/images/easy.png'
import navOptions from '../../data/easyLiveNavOptions';

const EasyLiveHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Determine navbar background color based on route
    const isHomePage = location.pathname === '/';
    const navbarBgClass = isHomePage
        ? 'bg-white'
        : 'bg-white shadow-lg';

    return (
        <nav className={`relative ${navbarBgClass} transition-colors duration-300`}>
            <div className="w-11/12 mx-auto sm:px-4 lg:px-7">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/" className="text-2xl font-bold text-dark-green">
                            <img
                                src={logo}
                                alt="Flowra Logo"
                                className='lg:h-12 sm:h-10 h-8'
                            />
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6 text-lg text-dark-green font-medium">
                        {navOptions.map((option) => (
                            <NavLink
                                key={option.name}
                                to={option.link}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? "text-easy-secondary font-semibold" : "hover:text-easy-secondary"
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
                            className="px-4 py-2 rounded-md text-dark-green hover:text-easy-secondary transition duration-200"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className="text-2xl text-dark-green hover:text-easy-secondary transition duration-200"
                        >
                            <HiOutlineShoppingBag />
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            className="p-2 rounded-md focus:outline-none hover:text-easy-secondary"
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
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out bg-gray-100 lg:hidden ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="px-6 py-4 space-y-3">
                    {navOptions.map((option) => (
                        <NavLink
                            key={option.name}
                            to={option.link}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive
                                    ? "text-easy-secondary font-semibold"
                                    : "text-dark-green hover:text-easy-secondary"
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
                        className="block px-4 py-2 rounded-md bg-easy-secondary text-white hover:bg-dark-green transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Login
                    </NavLink>

                    {/* Cart Button for Mobile */}
                    <NavLink
                        to="/cart"
                        className="block px-4 py-2 rounded-md text-dark-green hover:bg-secondary-light transition duration-200"
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