import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const TopNav = () => {
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
    const [showSupportDropdown, setShowSupportDropdown] = useState(false);

    const productsDropdownRef = useRef(null);
    const resourcesDropdownRef = useRef(null);
    const supportDropdownRef = useRef(null);

    // Toggle dropdown when "Products" button is clicked
    const toggleProductsDropdown = () => {
        setShowProductsDropdown(prevState => !prevState);
        setShowResourcesDropdown(false); // Close other dropdown
        setShowSupportDropdown(false);
    };

    // Toggle dropdown when "Resources" button is clicked
    const toggleResourcesDropdown = () => {
        setShowResourcesDropdown(prevState => !prevState);
        setShowProductsDropdown(false); // Close other dropdown
        setShowSupportDropdown(false);
    };

    const toggleSupportDropdown = () => {
        setShowSupportDropdown(prev => !prev);
        setShowProductsDropdown(false);
        setShowResourcesDropdown(false);
    };

    // Close dropdowns if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                productsDropdownRef.current && !productsDropdownRef.current.contains(event.target) &&
                resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target) &&
                supportDropdownRef.current && !supportDropdownRef.current.contains(event.target)
            ) {
                setShowProductsDropdown(false);
                setShowResourcesDropdown(false);
                setShowSupportDropdown(false);
            }
        };

            document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
    <>
        {/* Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-6 ml-8 relative">
              
            {/* Products Dropdown */}
            <div 
                className="relative"
                onClick={toggleProductsDropdown}
                ref={productsDropdownRef}
            >
                <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                    Products
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>
                
                {/* Full-Width Multi-Column Dropdown Menu */}
                {showProductsDropdown && (
                <div className="absolute top-full mt-7 w-[70rem] bg-white border-t border-gray-200 shadow-lg z-20 shadow-xl overflow-y-auto scrollbar-hide"  style={{ maxHeight: '500px' }} >
                    <div className="mx-auto max-w-7xl p-6 grid grid-cols-5 border-b-2 border-blue-900">
                        {/* Column 1 */}
                        <div>
                            <h3 className="font-semibold text-gray-900 text-sm mb-2"></h3>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded font-semibold text-gray-900 text-sm">for enterprise</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded font-semibold text-gray-900 text-sm">for business</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded font-semibold text-gray-900 text-sm">For education</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded font-semibold text-gray-900 text-sm">For individual</a>
                        </div>
                        {/* Column 2 */}
                        <div>
                            <h3 className="font-semibold text-gray-900 text-sm mb-2">For Enterprise</h3>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">HR360Cloud</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">iTeam</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Lead Konnekt</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Easy Forms</a>
                        </div>
                        {/* Column 3 */}
                        <div>
                            <h3 className="font-semibold text-gray-900 text-sm mb-2">For Business</h3>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">HR360Cloud</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">iTeam</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Lead Konnekt</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Easy Forms</a>
                        </div>
                        {/* Column 4 */}
                        <div>
                            <h3 className="font-semibold text-gray-900 text-sm mb-2">For Education</h3>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">iSchool</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">iSchool For Me</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Easy Fee</a>
                        </div>
                        {/* Column 5 */}
                        <div>
                            <h3 className="font-semibold text-gray-900 text-sm mb-2">Individual</h3>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">HR360Cloud</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">iTeam</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Lead Konnekt</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Easy Forms</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">iSchool</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">iSchool For Me</a>
                            <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Easy Fee</a>
                        </div>
                    </div>
                  </div>
                )}
                </div>

                <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
                    Plans and pricing
                </a>

                {/* Single-Column Dropdown for Resources */}
                <div 
                    className="relative"
                    onClick={toggleResourcesDropdown}
                    ref={resourcesDropdownRef}
                >
                    <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                    Resources
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>

                    {showResourcesDropdown && (
                    <div className="absolute top-full mt-7 w-56 bg-white border border-gray-200 shadow-lg z-20">
                        <ul className="p-4 border-b-2 border-blue-900">
                        <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                            <a href="#">Documentation</a>
                        </li>
                        <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                            <a href="#">API Reference</a>
                        </li>
                        <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                            <a href="#">Community Forum</a>
                        </li>
                        <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                            <a href="#">Tutorials</a>
                        </li>
                        <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                            <a href="#">Blog</a>
                        </li>
                        </ul>
                    </div>
                    )}
                </div>
                {/* Support Dropdown */}
                <div 
                    className="relative"
                    onClick={toggleSupportDropdown}
                    ref={supportDropdownRef}
                >
                    <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                        Support
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>

                    {showSupportDropdown && (
                    <div className="absolute top-full mt-7 w-56 bg-white border border-gray-200 shadow-lg z-20">
                        <ul className="p-4 border-b-2 border-blue-900">
                            <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                                <a href="#">Contact Support</a>
                            </li>
                            <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                                <a href="#">Live Chat</a>
                            </li>
                            <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                                <a href="#">Submit a Ticket</a>
                            </li>
                            <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                                <a href="#">Help Center</a>
                            </li>
                            <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    )}
                </div>
            </div>
    </>
  )
}

export default TopNav