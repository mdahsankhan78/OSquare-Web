import React, { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const location = useLocation();
  const productsDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const supportDropdownRef = useRef(null);

  // Toggle dropdown when "Products" button is clicked
  const toggleProductsDropdown = () => {
    setShowProductsDropdown((prevState) => !prevState);
    setShowResourcesDropdown(false); // Close other dropdown
    setShowSupportDropdown(false);
  };

  // Toggle dropdown when "Resources" button is clicked
  const toggleResourcesDropdown = () => {
    setShowResourcesDropdown((prevState) => !prevState);
    setShowProductsDropdown(false); // Close other dropdown
    setShowSupportDropdown(false);
  };

  const toggleSupportDropdown = () => {
    setShowSupportDropdown((prev) => !prev);
    setShowProductsDropdown(false);
    setShowResourcesDropdown(false);
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target) &&
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target) &&
        supportDropdownRef.current &&
        !supportDropdownRef.current.contains(event.target)
      ) {
        setShowProductsDropdown(false);
        setShowResourcesDropdown(false);
        setShowSupportDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full mx-auto bg-white shadow-md border-b-2 border-gray-100">
      <header className="bg-white shadow-md border-b-2 border-grey-100 ">
        <nav className="px-6 xl:px-24 2xl:px-48 flex max-w-full items-center justify-between p-5 ">

          <button className="text-black hover:text-black focus:outline-none lg:hidden">
            <Sheet>
              <SheetTrigger>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>

              <SheetContent className='overflow-y-auto scrollbar-hide'>
                <div className="flex justify-center pb-2">
                  <Link to="/">
                    <img src="/Logo.svg" alt="OSquare" className="h-8 ml-2" />
                  </Link>
                </div>
                <Accordion>
                  <AccordionItem value="1">
                    <AccordionTrigger>Products</AccordionTrigger>
                    <AccordionContent>
                      <p className="font-semibold text-gray-900 text-lg my-4">
                        For Enterprise
                      </p>
                      <div className="flex flex-col gap-y-1">
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/hr360">HR360Cloud</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/iteam">iTeam</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/leadkonnekt">Lead Konnekt</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/easyforms">Easyforms</a></li><hr className="my-2" />
                      </div>
                      <h2 className="font-semibold text-gray-900 text-lg my-4">
                        For Business
                      </h2>
                      <div className="flex flex-col gap-y-1">
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/hr360">HR360Cloud</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/iteam">iTeam</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/leadkonnekt">Lead Konnekt</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/easyforms">Easyforms</a></li><hr className="my-2" />
                      </div>
                      <h2 className="font-semibold text-gray-900 text-lg my-4">
                        For Education
                      </h2>
                      <div className="flex flex-col gap-y-1">
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/hr360">HR360Cloud</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/leadkonnekt">Lead Konnekt</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/easyforms">Easyforms</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/ischool">iSchool</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/ischoolforme">iSchool For Me</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/easyfee">EasyFee</a></li><hr className="my-2" />
                      </div>
                      <h2 className="font-semibold text-gray-900 text-lg my-4">
                        For Individual
                      </h2>
                      <div className="flex flex-col gap-y-1">
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/iteam">iTeam</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/leadkonnekt">Lead Konnekt</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/easyforms">Easyforms</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/ischoolforu">iSchool For U</a></li>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  {location.pathname === "/enterprise" || location.pathname === "/education" || location.pathname === "/business" || location.pathname === "/individual" ? (
                    <AccordionItem value="2" className='py-4'>
                      <a href="#plans"
                        className="py-4 text-xl font-semibold transition-all text-left"
                        onClick={(e) => {
                          e.preventDefault();
                          const targetElement = document.getElementById("plans");
                          if (targetElement) {
                            targetElement.scrollIntoView({ behavior: "smooth" });
                          }
                        }}>Plans and pricing</a>
                    </AccordionItem>
                  ) : ''}
                  <AccordionItem value="3">
                    <AccordionTrigger>Resource</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-y-1">
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/obrain-for-work">OBrain for Work</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/cost-saving">Cost Saving</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/blogs">Blogs</a></li>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="4">
                    <AccordionTrigger>Support</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-y-1">
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/contact-support">Contact Support</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/submit-a-ticket">Submit a Ticket</a></li><hr className="my-2" />
                        <li><MdOutlineKeyboardArrowRight /><a href="/#/faqs">FAQs</a></li>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </SheetContent>
            </Sheet>
          </button>

          <div className="flex items-center gap-x-6 w-full justify-center lg:justify-normal">

            <Link to="/">
              <span className="flex items-center">
                <img src="/Logo.svg" alt="OSquare" className="h-8 ml-2" />
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex lg:gap-x-6 ml-8 relative">
              {/* Products Dropdown */}
              <div
                className="relative"
                onClick={toggleProductsDropdown}
                ref={productsDropdownRef}
              >
                <button className="text-sm md:text-md font-normal text-[#172554]/85 hover:text-[#172554] flex items-center">
                  Products
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>

                {/* Full-Width Multi-Column Dropdown Menu */}
                {showProductsDropdown && (
                  <div
                    className="absolute top-full mt-7 w-[50rem] bg-white border-t border-gray-200 z-20 shadow-xl overflow-y-auto scrollbar-hide"
                    style={{ maxHeight: "500px" }}
                  >
                    <div className="mx-auto max-w-7xl p-6 grid grid-cols-4 gap-8 border-b-2 border-blue-900">

                      {/* Column 2 */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg md:text-md  mb-2">
                          For Enterprise
                        </h3>
                        <a
                          href="/#/hr360"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          HR360
                        </a>
                        <a
                          href="/#/iteam"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          iTeam
                        </a>
                        <a
                          href="/#/leadkonnekt"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          Lead Konnekt
                        </a>
                        <a
                          href="/#/easyforms"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          Easy Forms
                        </a>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg md:text-md  mb-2">
                          For Business
                        </h3>
                        <a
                          href="/#/hr360"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          HR360
                        </a>
                        <a
                          href="/#/iteam"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          iTeam
                        </a>
                        <a
                          href="/#/leadkonnekt"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          Lead Konnekt
                        </a>
                        <a
                          href="/#/easyforms"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          Easy Forms
                        </a>
                      </div>

                      {/* Column 4 */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg md:text-md  mb-2">
                          For Education
                        </h3>
                        <a
                          href="/#/hr360"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          HR360
                        </a>
                        <a
                          href="/#/leadkonnekt"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          Lead Konnekt
                        </a>
                        <a
                          href="/#/easyforms"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          Easy Forms
                        </a>
                        <a
                          href="/#/ischool"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          iSchool
                        </a>
                        <a
                          href="/#/ischoolforme"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          iSchool For Me
                        </a>
                        <a
                          href="/#/easyfee"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          Easy Fee
                        </a>
                      </div>

                      {/* Column 5 */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg md:text-md  mb-2">
                          Individual
                        </h3>
                        <a
                          href="/#/iteam"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          iTeam
                        </a>
                        <a
                          href="/#/leadkonnekt"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          Lead Konnekt
                        </a>
                        <a
                          href="/#/easyforms"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          Easy Forms
                        </a>
                        <a
                          href="/#/ischoolforu"
                          className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded"
                        >
                          iSchool For U
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {location.pathname === "/enterprise" || location.pathname === "/education" || location.pathname === "/business" || location.pathname === "/individual" ? (
                <a
                  href="#plans"
                  className="text-sm md:text-md font-normal text-[#172554]/85 hover:text-[#172554]/85"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default hash-based navigation
                    const targetElement = document.getElementById("plans"); // Find the target section
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
                    }
                  }}
                >
                  Plans and pricing
                </a>
              ) : ''}
              {/* Single-Column Dropdown for Resources */}
              <div
                className="relative"
                onClick={toggleResourcesDropdown}
                ref={resourcesDropdownRef}
              >
                <button className="text-sm md:text-md font-normal text-[#172554]/85 hover:text-[#172554] flex items-center">
                  Resources
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>

                {showResourcesDropdown && (
                  <div className="absolute top-full mt-7 w-56 bg-white border border-gray-200 shadow-lg z-20">
                    <ul className="p-4 border-b-2 border-blue-900">
                      <Link to="/obrain-for-work" className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a>OBrain for Work</a>
                      </Link>
                      <Link to="/cost-saving" className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a>Cost Saving</a>
                      </Link>
                      <Link to="/blogs" className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a>Blogs</a>
                      </Link>
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
                <button className="text-sm md:text-md  font-normal text-[#172554]/85 hover:text-[#172554] flex items-center">
                  Support
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>

                {showSupportDropdown && (
                  <div className="absolute top-full mt-7 w-56 bg-white border border-gray-200 shadow-lg z-20">
                    <ul className="p-4 border-b-2 border-blue-900">
                      <Link to={'/contact-support'} className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a>Contact Support</a>
                      </Link>
                      <Link to={'/submit-a-ticket'} className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a >Submit a Ticket</a>
                      </Link>
                      <Link to={'/faqs'} className="block text-sm md:text-md  text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a>FAQs</a>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <style>
        {`
        li{
        list-style-type:none;
        display:flex;
        align-items:center
        }
        `}
      </style>
    </div>
  );
};

export default Header;
