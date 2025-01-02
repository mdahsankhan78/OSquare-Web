import React, { useState, useEffect } from "react";
import { Globe, Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = {
    sections: [
      {
        title: "WHAT's NEW",
        links: [
          { name: 'OBrain', url: '/#/obrain', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Take your School Online', url: '/#/take-your-school-online', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'SERVICES', isBold: true, isUpppercase: true, isUnderline: false },
          { name: 'Hosting', url: '/#/hosting', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Support', url: '/#/contact-support', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Custom Development', url: '/#/custom-development', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Become a Partner', url: '/#/become-partner', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'About Us', isBold: true, isUpppercase: true, isUnderline: false },
          { name: 'Our Company', url: '/#/our-company', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Blogs', url: '/#/blogs', isBold: false, isUpppercase: false, isUnderline: true },
        ]
      },
      {
        title: 'ENTERPRISE',
        links: [
          { name: 'Human Resource', url: '/#/hr360', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Project Management', url: '/#/iteam', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Customer Relationship Management', url: '/#/leadkonnekt', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Forms & Workflows Management', url: '/#/easyforms', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Dedicated Server', url: '/#/hosting', isBold: false, isUpppercase: false, isUnderline: true },
        ]
      },
      {
        title: 'BUSINESS',
        links: [
          { name: 'Human Resource', url: '/#/hr360', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Project Management', url: '/#/iteam', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Customer Relationship Management', url: '/#/leadkonnekt', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Forms & Workflows Management', url: '/#/easyforms', isBold: false, isUpppercase: false, isUnderline: true },
        ]
      },
      {
        title: 'EDUCATION',
        links: [
          { name: 'Human Resource', url: '/#/hr360', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Forms & Workflow Management', url: '/#/easyforms', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'School Management System', url: '/#/ischool', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'School Information System', url: '/#/ischoolforme', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Fee Management', url: '/#/easyfee', isBold: false, isUpppercase: false, isUnderline: true },
          // { name: 'Mobile App', url: '', isBold: false, isUpppercase: false, isUnderline: true },
        ]
      },
      {
        title: 'INDIVIDUAL',
        links: [
          { name: 'Project Management', url: '/#/iteam', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Customer Relationship Management', url: '/#/leadkonnekt', isBold: false, isUpppercase: false, isUnderline: true },
          { name: 'Forms & Workflow Management', url: '/#/easyforms', isBold: false, isUpppercase: false, isUnderline: true },
          // { name: 'Calender', url: '', isBold: false, isUpppercase: false, isUnderline: true },
        ]
      },
    ]
  };

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Track scroll position to toggle "Back to Top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="max-w-full mx-auto bg-gray-50 pt-12 text-sm md:text-md relative">
        <div className=" px-4 sm:px-6 xl:px-24 2xl:px-48">
          {/* Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerData.sections.map((section, index) => (
              <div
                key={index}
                className={`${index === 0
                  ? "col-span-2 lg:col-span-2 md:border-r md:pr-6 border-gradient-to-r from-violet-600 to-indigo-600"
                  : ""
                  }`}
              >
                <h3 className="font-bold text-gray-600 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className={`text-gray-600 hover:text-gray-700  ${link.isBold ? 'font-bold' : ''} ${link.isUpppercase ? 'uppercase' : ''
                          }${link.isUnderline ? 'hover:underline' : ''}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-12 md:pt-8 border-t border-gradient-to-r from-violet-600 to-indigo-600">
            {/* Social Media Icons */}
            <div className="flex md:hidden items-center justify-center space-x-4">
              Powered by &nbsp;{" "}
              <img src="/Innovador-Solutions.svg" alt="Innovador Solutions" width={100} />
            </div>
            <div className="flex justify-end gap-x-2 gap-y-2 text-gray-500">
              <span className="font-bold">Follow Us</span>
              <a
                href="https://www.facebook.com/people/OSquare/61570254534956/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-900 transition-colors"
                aria-label="Facebook"
              >
                <img src="./facebook.svg" alt="facebook" width={22} />
              </a>
              <a
                href="https://www.instagram.com/osquare.live/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-900 transition-colors"
                aria-label="instagram"
              >
                <img src="./instagram.svg" alt="instagram" width={22} />
              </a>
              <a
                href="https://www.tiktok.com/@osquare.live/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-900 transition-colors"
                aria-label="tiktok"
              >
                <img src="./tiktok.svg" alt="tiktok" width={22} />
              </a>
              <a
                href="https://www.youtube.com/@OSquareLive/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-900 transition-colors"
                aria-label="youtube"
              >
                <img src="./youtube.svg" alt="youtube" width={22} />
              </a>
              <a
                href="https://www.linkedin.com/company/osquareuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-900 transition-colors"
                aria-label="linkedin"
              >
                <img src="./linkedin.svg" alt="linkedin" width={22} />
              </a>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-y-4 pb-4 md:pb-0">
            {/* Powered By */}
            <div className="hidden md:flex items-center justify-center sm:justify-start space-x-4">
              Powered by &nbsp;{" "}
              <a href="https://innovadorsolutions.com/" target="_blank"><img src="/Innovador-Solutions.svg" alt="Innovador Solutions" width={100} /></a>
            </div>

            {/* Links and Copyright */}
            <div className="flex flex-wrap justify-end gap-x-6 py-1 text-gray-500 col-span-2">
              <a href="/#/contact-us" className="hover:text-gray-700 hover:underline">
                Contact OSquare
              </a>
              <a href="/#/privacy-policy" className="hover:text-gray-700 hover:underline">
                Privacy Policy
              </a>
              <a href="/#/terms-conditions" className="hover:text-gray-700 hover:underline">
                Terms of use
              </a>
              <Link to={'/  '} className="font-bold hover:text-accent transition-all">© OSquare {new Date().getFullYear()}</Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-[#172554] text-white p-3 rounded-full shadow-lg hover:bg-[#172554]/75 focus:outline-none transition z-50"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;
