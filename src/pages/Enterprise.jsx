import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Solutions from "../components/Solutions";
import {
  tab1Features,
  tab1Images,
  tab2Features,
  tab2Images,
  tab3Features,
  tab3Images,
} from "../Enterprise/SolutionsData";
import FeaturedNews from "../components/featured-news/FeaturedNews";
import AppsShowcase from "../components/app-showcase/AppShowcase";
import Innovations from "../components/Innovations2";
import Pricing from "../components/Pricing";
import CustomerStories from "../components/customer-stories/CustomerStories";
// import Testimonial from "../components/Testimonials";
import Blogs from "../components/blogs/FeatureCards";
import { motion } from "framer-motion";

export const pageAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Enterprise = ({ sectionPlansRef }) => {
  const navLinks = [
    { id: "solutions", label: "Solutions" },
    { id: "featured-news", label: "Featured News" },
    { id: "whats-included", label: "What's Included" },
    { id: "plans", label: "Plans" },
    { id: "customer-stories", label: "Customer Stories" },
  ];

  const tabsData = [
    {
      label: "Unleash Creative Potential",
      features: tab1Features,
      images: tab1Images,
      initialImage: "accordion-1",
    },
    {
      label: "Boost Efficiency",
      features: tab2Features,
      images: tab2Images,
      initialImage: "accordion-1",
    },
    {
      label: "Work Confidently",
      features: tab3Features,
      images: tab3Images,
      initialImage: "accordion-1",
    },
  ];

  const sectionPricingRef = useRef(null);

  const cardsData = [
    {
      icon: "/icon2.svg",
      logo: "/Logo.svg",
      description:
        "OSquare is here to assist you with solutions, and support every step of the way.",
      buttonText: "Try Now",
      redirectTo: "/enterprisepricing",
      slides: ["/screens/02.jpg", "/screens/03.jpg", "/screens/04.jpg", "/screens/05.jpg", "/screens/06.jpg", "/screens/07.jpg", "/screens/08.jpg"],
    },
  ];

  const tabs = [
    {
      id: 1,
      icon: "/apps/hr360.svg",
      iconColor: "text-sky-600",
      name: "HR360",
      to: "/hr360",
      description:
        "Optimize your HR processes and manage employee data seamlessly—all in one secure, cloud-based platform.",
    },
    {
      id: 2,
      icon: "/apps/iteam.svg",
      iconColor: "text-green-600",
      name: "iTeam",
      to: "/iteam",
      description:
        "Empower your team and streamline project workflows—collaborate, manage tasks, and track progress from anywhere.",
    },
    {
      id: 3,
      icon: "/apps/leadkonnekt.svg",
      iconColor: "text-sky-600",
      name: "LeadKonnekt",
      to: "/leadkonnekt",
      description:
        "Effortlessly generate, manage, and optimize leads—simplify prospecting and enhance your customer acquisition strategy with LeadKonnekt.",
    },
    {
      id: 4,
      icon: "/apps/easyforms.svg",
      iconColor: "text-sky-600",
      name: "EasyForms",
      to: "/easyforms",
      description:
        "Create, manage, and automate forms with ease—streamline data collection and improve workflow efficiency.",
    },
    {
      id: 5,
      icon: "/apps/ams.svg",
      iconColor: "text-sky-600",
      name: "AMS",
      to: "/ams",
      description:
        "AMS offers a precise, efficient workforce management solution using advanced biometric technology to ensure accurate attendance tracking and eliminate errors or time theft.",
    },
  ];

  const pricingPlans = [
    {
      title: "Features",
      features: [
        "Human Resource Management",
        "Project Management",
        "Lead Generation",
        "Forms Management",
      ],
      buttonText: "Get started",
      buttonLink: "/enterprisepricing",
      products: [
        "/apps/hr360.svg",
        "/apps/iteam.svg",
        "/apps/leadkonnekt.svg",
        "/apps/easyforms.svg",
      ],
    },
  ];

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
        backgroundImage="/Banners/Slider1.jpg"
        overlayColor="black/30"
        title={
          <>
            Empower Your Business to <br className="hidden sm:block" /> Thrive
            with{" "}
            <span
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
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
              Square</span>
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
              OSquare for Enterprise
            </span>
          </>
        }
        description="Unlock the full potential of your teams with OSquare, enabling them to collaborate seamlessly and achieve exceptional business outcomes."
        buttonText="Try Now"
        buttonLink="/#/enterprisepricing"
        links={[
          { label: "For Enterprise", to: "/enterprise", isActive: true },
          { label: "For Business", to: "/business" },
          { label: "For Education", to: "/education" },
          { label: "For Individual", to: "/individual" },
        ]}
      />
      <div className="max-w-full">
        <Navbar
          links={navLinks}
          buttonText="Get Started"
          buttonLink="/#/enterprisepricing"
          scrollThreshold={550}
          sectionSolutionRef={sectionSolutionRef}
          sectionFeaturedNewsRef={sectionFeaturedNewsRef}
          sectionWhatsIncludedRef={sectionWhatsIncludedRef}
          sectionPlansRef={sectionPlansRef}
          sectionCustomerStoriesRef={sectionCustomerStoriesRef}
        // sectionBlogsRef={sectionBlogsRef}
        />
        <Solutions
          canToggle={true}
          tabsData={tabsData}
          sectionTitle="Leverage productivity of businesses"
          sectionSubtitle="SOLUTIONS"
          gradientColors={["white", "purple-50"]}
          ref={sectionSolutionRef}
        />
        <FeaturedNews
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
            <Innovations />
            <Pricing ref={sectionPricingRef} plans={pricingPlans} />
            <CustomerStories />
            {/* <Testimonial /> */}
            <Blogs />
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Enterprise;
