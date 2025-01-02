import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Navbar = ({
  links = [],
  scrollThreshold = 600,
  sectionAboutRef,
  sectionModulesRef,
  sectionDiscoverMoreRef,
  sectionFAQsRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const linksToRef = {
    about: sectionAboutRef,
    modules: sectionModulesRef,
    "discover-more": sectionDiscoverMoreRef,
    faqs: sectionFAQsRef,
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].id);
        if (section && window.scrollY >= section.offsetTop - 80) {
          setActiveLink(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsOpen(false);
    const section = document.getElementById(linkId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`w-full bg-white shadow-lg z-50 transition-all duration-300 ${isScrolled ? "sticky top-0 " : "relative"
        } bg-white text-blue-950 font-semibold lg:text-sm`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 xl:px-24 2xl:px-48 ">
        {/* Desktop Links */}
        <div className="md:flex items-center space-x-10 hidden">
          {links.map((link) => (
            <>
              <div className="relative py-5">
                <a
                  key={link.id}
                  onClick={() => {
                    handleLinkClick(link.id);
                    scrollToSection(linksToRef[link.id]);
                  }}
                  className={`cursor-pointer`}
                >
                  {link.label}
                </a>
                {activeLink === link.id &&
                  <motion.div className='bg-blue-950 h-1 w-full absolute bottom-0 rounded-xl' layoutId='link'></motion.div>
                }
              </div>
            </>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center w-full py-4 justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col pb-4 px-4 gap-y-2">
          {links.map((link) => (
            <a
              key={link.id}
              onClick={() => {
                handleLinkClick(link.id);
                scrollToSection(linksToRef[link.id]);
              }}
              className={`cursor-pointer`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
