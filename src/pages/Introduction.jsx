import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Solutions from "../components/Solutions";
import {
  IntroImages,
  IntroTab,
} from "../Enterprise/SolutionsData";
import FeaturedNews from "../components/featured-news/FeaturedNews";
import AppsShowcase from "../components/app-showcase/AppShowcase";
import Innovations from "../components/Innovations2";
import Pricing from "../components/Pricing";
import CustomerStories from "../components/customer-stories/CustomerStories";
import Blogs from "../components/blogs/FeatureCards";
import { Badge } from './../components/ui/badge'
import Cards from "../components/ui/Introduction/Cards";
import { Link } from "react-router-dom";
import { pageAnimation } from "./Enterprise";
import { motion } from "framer-motion";

const Enterprise = ({ sectionPlansRef }) => {

  const tabsData = IntroTab;
  const links = [
    { label: "For Enterprise", to: "/enterprise", },
    { label: "For Business", to: "/business" },
    { label: "For Education", to: "/education" },
    { label: "For Individual", to: "/individual" },
  ]
  const sectionSolutionRef = useRef(null);
  const sectionFeaturedNewsRef = useRef(null);
  const sectionWhatsIncludedRef = useRef(null);
  // const sectionPlansRef = useRef(null);
  const sectionCustomerStoriesRef = useRef(null);
  // const sectionBlogsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Check if the scroll position is greater than 0 (i.e., if the page is scrolled down)
    if (window.scrollY > 0) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll
      });
    }
  }, []);
  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero
        backgroundImage="/Introduction.jpg"
        title={
          <>
            The Future of Digital Productivity
          </>
        }
        subtitle={
          <>
            <span
              style={{
                className: "inline-block rounded-full bg-[#172554]/10 px-4 py-1.5 text-sm font-medium text-[#172554] mb-8",
                style: "opacity: 1; transform: none;",
              }}
            >
              Welcome to OSquare
            </span>
          </>
        }
        description="OSquare is an advanced, all-encompassing digital platform built to elevate productivity, optimize workflows, and foster seamless collaboration."
        buttonText="Get Started"
        buttonLink="/#/enterprise"
        links={[
          { label: "For Enterprise", to: "/enterprise", },
          { label: "For Business", to: "/business" },
          { label: "For Education", to: "/education" },
          { label: "For Individual", to: "/individual" },
        ]}
      />


      <div className="max-w-full ">
        <div className="px-4 sm:px-6 xl:px-40 2xl:px-60 pt-20">
          <div className="inline-flex md:flex flex-wrap md:flex-row gap-2 justify-center text-gray-700 whitespace-nowrap">
            <Badge className={'bg-[#273066]'}>Cloud-Powered Collaboration</Badge>
            <Badge className={'bg-[#a16cff]'}>Intuitive And User Friendly   </Badge>
            <Badge className={'bg-[#FF60E0]'}>Scalable And Flexible</Badge>
            <Badge className={'bg-[#4855bd]'}>Security You Can Trust</Badge>
          </div>

          {/* <div className="inline-flex flex-col gap-2 justify-center">
            <Badge className={'bg-[#273066]'}>Cloud-Powered Collaboration</Badge>
            <Badge className={'bg-[#a16cff]'}>Cloud-Powered Collaboration</Badge>
            <Badge className={'bg-[#FF60E0]'}>Cloud-Powered Collaboration</Badge>
            <Badge>Cloud-Powered Collaboration</Badge>
          </div> */}
          <p className="text-justify text-md mt-5">With a diverse suite of integrated tools, OSquare enables individuals and teams to manage tasks, communicate effortlessly, and organize their digital worlds with remarkable ease. Whether you’re handling personal projects, leading a dynamic team, or driving business growth, OSquare offers the essential tools that empower you to work smarter, stay organized, and achieve your objectives more effectively.</p>

          <h1 className="font-semibold text-[#172554] text-2xl sm:text-3xl mt-12 text-justify">What Makes{' '}
            <span
              className="text-3xl sm:text-4xl"
              style={{
                fontFamily: "Bhineka",
                background: "linear-gradient(to right, #1E4FCD, #F36F7E)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                padding: "0 5px",
              }}
            >
              O
            </span>
            <span style={{ fontFamily: 'Noopla', fontWeight: '200' }}>
              Square</span> Different?</h1>
          <p className="text-justify text-md">What truly sets OSquare apart is its powerful integration of Artificial Intelligence. Designed with cutting-edge AI technology, many of OSquare’s products and features are infused with intelligent capabilities that enhance your experience. From smart document editing and automated task management to predictive analytics and advanced collaboration tools, OSquare’s AI-powered solutions provide intelligent insights and seamless automation that streamline everyday tasks and decision-making processes.</p><br />
          <p className="text-justify text-md">Designed for businesses of all sizes and individuals alike, OSquare is the future of digital productivity, combining AI intelligence with powerful tools in a single, easy-to-use platform. Stay organized, collaborate effortlessly, and unlock the full potential of your work with OSquare.</p>
        </div>

        {/* vision cards */}
        <div className="relative">
          <Cards IntroData={tabsData} />
          {/* tabs */}
          <div className="tabs sticky bottom-4 z-10 sm:justify-items-center py-5x px-4 sm:px-6 md:px-10 xl:px-24 2xl:px-48">
            <h1 className="text-xl font-bold text-primary backdrop-blur-md px-4 py-2 rounded-full shadow-lg justify-self-center">Explore the variety of plans</h1>
            <div className="flex whitespace-nowrap items-center gap-2 sm:gap-4 p-2 rounded-full shadow-lg backdrop-blur-md overflow-x-auto tabs">
              {links.map((link, index) => (
                <Link
                  key={index}
                  className={`px-6 py-4 sm:px-8 sm:py-4 rounded-full font-medium text-xs sm:text-sm transition-all duration-200`}
                  to={link.to}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>


        {/* <Solutions
          canToggle={false}
          tabsData={tabsData}
          gradientColors={["white", "purple-50"]}
          ref={sectionSolutionRef}
        /> */}

        {/* <FeaturedNews
          headerText="FEATURED NEWS"
          // subtitle="Discover what's happening with OSquare"
          subtitle={
            <>
              Discover what's happening with{" "}
              <span
                className="text-5xl sm:text-6xl"
                style={{
                  fontFamily: "Bhineka",
                  background: "linear-gradient(to right, #1E4FCD, #F36F7E)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  padding: "0 5px",
                }}
              >
                O
              </span>
              Square
            </>
          }
          cards={cardsData}
        />
        <AppsShowcase
          tabs={tabs}
          title="Boost your potential with"
          description="Explore apps designed to enhance your workflow and efficiency."
        />
        <AnimatePresence>
          <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
            <Innovations/>
            <Pricing ref={sectionPricingRef} plans={pricingPlans} />
            <CustomerStories />
            <Testimonial />
            <Blogs />
          </div>
        </AnimatePresence> */}
      </div>


    </motion.div>
  );
};

export default Enterprise;
