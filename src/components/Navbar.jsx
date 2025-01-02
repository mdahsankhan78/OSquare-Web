import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = ({
  links = [],
  buttonText = "Try Now",
  buttonLink = "/",
  scrollThreshold = 550,
  sectionSolutionRef,
  sectionFeaturedNewsRef,
  sectionAppShowcaseRef,
  sectionInnovationRef,
  sectionPricingRef,
  sectionCustomerStoriesRef,
  // sectionBlogsRef
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const linksToRef = {
    solution: sectionSolutionRef,
    "featured-news": sectionFeaturedNewsRef,
    "whats-included": sectionAppShowcaseRef,
    "innovation-in-tech": sectionInnovationRef,
    plans: sectionPricingRef,
    "customer-stories": sectionCustomerStoriesRef,
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
      className={`w-full bg-white shadow-sm z-50 transition-all duration-300 border-t-1 ${isScrolled ? "sticky top-0 " : "relative"
        } bg-white text-blue-950 font-semibold lg:text-sm`}
    >
      <div className="mx-auto px-4 sm:px-6 xl:px-24 2xl:px-48">
        <div className="flex justify-between">
          {/* Desktop Links */}
          <div className="lg:flex items-center space-x-10 hidden">
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

          {/* Desktop Button */}
          <div className="hidden lg:flex space-x-4 items-center">
            <a
              href={buttonLink}
              className="mr-5 inline-block rounded-md bg-blue-950 px-4 py-2 text-center font-semibold text-white md:mr-6 lg:mr-8"
            >
              {buttonText}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center w-full justify-end py-4">
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-y-2 px-4 pb-4 bg-white">
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
