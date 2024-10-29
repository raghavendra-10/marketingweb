'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/calogo.png';

const Navbar = ({ currentPath }) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFeatures = () => setIsFeaturesOpen(!isFeaturesOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActiveLink = (path) => currentPath === path;

  return (
    <nav className="bg-white border-gray-200">
      <div className={`min-w-screen-xl flex ${isMobileMenuOpen ? 'flex-col' : 'flex-row'} md:flex-row items-center justify-between mx-auto p-4`}>
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} alt="Care Automate Logo" width={120} height={30} />
        </a>
        
        {/* Burger Icon for Mobile Screens */}
        <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links and Buttons */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col md:flex-row md:items-center font-medium md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border md:border-0 rounded-lg bg-gray-50 md:bg-white">
            <li><Link href="/" className={`block py-2 px-3 rounded ${isActiveLink('/') ? 'text-blue-600 font-semibold' : ''}`}>Software</Link></li>
            <li><Link href="/features" className={`block py-2 px-3 rounded ${isActiveLink('/features') ? 'text-blue-600 font-semibold' : ''}`}>Features</Link></li>

            {/* <li className="relative"> */}
              {/* <button onClick={toggleFeatures} className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent">
                Features {isFeaturesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button> */}
              {/* {isFeaturesOpen && (
                <div className="absolute top-full mt-1 left-0 z-10 font-normal bg-white divide-y rounded-lg shadow-lg w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><Link href="/features" className="block px-4 py-2 hover:bg-gray-100">Scheduling</Link></li>
                    <li><Link href="/features/document-management" className="block px-4 py-2 hover:bg-gray-100">Document Management</Link></li>
                    <li><Link href="/features/billing" className="block px-4 py-2 hover:bg-gray-100">Billing & Payroll</Link></li>
                    <li><Link href="/features/communication" className="block px-4 py-2 hover:bg-gray-100">Communication</Link></li>
                    <li><Link href="/features/visits" className="block px-4 py-2 hover:bg-gray-100">Visits</Link></li>
                    <li><Link href="/features/tenant-management" className="block px-4 py-2 hover:bg-gray-100">Tenant & HCM Management</Link></li>
                  </ul>
                </div>
              )} */}
            {/* </li> */}
            {/* <li className="relative">
              <button onClick={toggleResources} className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent">
                Resources {isResourcesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full mt-1 left-0 z-10 font-normal bg-white divide-y rounded-lg shadow-lg w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><Link href="/resources/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link></li>
                    <li><Link href="/resources/help-center" className="block px-4 py-2 hover:bg-gray-100">Help Center</Link></li>
                    <li><Link href="/resources/webinars" className="block px-4 py-2 hover:bg-gray-100">Webinars</Link></li>
                    <li><Link href="/resources/case-studies" className="block px-4 py-2 hover:bg-gray-100">Case Studies</Link></li>
                  </ul>
                </div>
              )}
            </li> */}
            <li><Link href="/contact" className={`block py-2 px-3 rounded ${isActiveLink('/contact') ? 'text-blue-600 font-semibold' : ''}`}>Contact</Link></li>
            <li><Link href="/pricing" className={`block py-2 px-3 rounded ${isActiveLink('/pricing') ? 'text-blue-600 font-semibold' : ''}`}>Pricing</Link></li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 md:ml-4">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">Log in</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Schedule a live demo</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
