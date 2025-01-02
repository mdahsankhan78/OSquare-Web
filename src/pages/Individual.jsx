import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import Solutions from '../components/Solutions';
import { tab1Features, tab1Images } from '../Individual/SolutionsData';
import FeaturedNews from '../components/featured-news/FeaturedNews';
import AppsShowcase from '../components/app-showcase/AppShowcase';
import Innovations from '../components/Innovations2';
import Pricing from '../components/Pricing';
import CustomerStories from '../components/customer-stories/CustomerStories';
import Blogs from '../components/blogs/FeatureCards';
import { motion } from 'framer-motion';
import { pageAnimation } from './Enterprise';

const Individual = () => {
  const navLinks = [
    { id: 'solutions', label: 'Solutions' },
    { id: 'featured-news', label: 'Featured News' },
    { id: 'whats-included', label: "What's Included" },
    { id: 'plans', label: 'Plans' },
    { id: 'customer-stories', label: 'Customer Stories' },
  ];

  const tabsData = [
    {
      label: 'Unleash Creative Potential',
      features: tab1Features,
      images: tab1Images,
      initialImage: 'accordion-1',
    },
  ];

  const cardsData = [
    {
      icon: "/icon2.svg",
      logo: "/Logo.svg",
      description: 'OSquare is here to assist you with solutions, and support every step of the way.',
      buttonText: 'Try Now',
      redirectTo: '/individualpricing',
      slides: ["/screens/02.jpg", "/screens/03.jpg", "/screens/04.jpg", "/screens/05.jpg", "/screens/06.jpg", "/screens/07.jpg", "/screens/08.jpg"],
    },
  ];

  const tabs = [

    {
      id: 1,
      icon: '/apps/iteam.svg',
      iconColor: 'text-green-600',
      name: 'iTeam',
      to: "/iteam",
      description: 'Empower your team and streamline project workflows—collaborate, manage tasks, and track progress from anywhere.'
    },
    {
      id: 2,
      icon: '/apps/leadkonnekt.svg',
      iconColor: 'text-sky-600',
      name: 'LeadKonnekt',
      to: "/leadkonnekt",
      description: 'Effortlessly generate, manage, and optimize leads—simplify prospecting and enhance your customer acquisition strategy with LeadKonnekt.'
    },
    {
      id: 3,
      icon: '/apps/easyforms.svg',
      iconColor: 'text-sky-600',
      name: 'EasyForms',
      to: "/easyforms",
      description: 'Create, manage, and automate forms with ease—streamline data collection and improve workflow efficiency.'
    },
    {
      id: 4,
      icon: '/apps/ischoolforu.svg',
      iconColor: 'text-sky-600',
      name: 'iSchool For U',
      to: "/ischoolforu",
      description: 'Simplify your school management with iSchoolForU—a subscription-based, cloud-powered platform to effortlessly handle student data, academic operations, and communication, all in one secure place.'
    },
    {
      id: 5,
      icon: '/apps/easyfee.svg',
      iconColor: 'text-sky-600',
      name: 'EasyFee',
      to: "/easyfee",
      description: 'Manage school fees effortlessly with EasyFee—a secure, subscription-based platform designed to streamline payments, track records, and simplify fee collection in one user-friendly system.'
    },
    {
      id: 6,
      icon: '/apps/ischool.svg',
      iconColor: 'text-green-600',
      name: 'iSchool',
      to: "/ischool",
      description: 'Streamline your school operations and manage student data effortlessly—all in one secure, cloud-based platform with iSchool.'
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
        "School Management",
        "Subscription based School Management",
        "Fee Management",
      ],
      buttonText: "Get started",
      buttonLink: "/individualpricing",
      products: [
        "/apps/hr360.svg",
        "/apps/iteam.svg",
        "/apps/leadkonnekt.svg",
        "/apps/easyforms.svg",
        "/apps/ischool.svg",
        "/apps/ischoolforme.svg",
        "/apps/easyfee.svg",
      ],
    },
  ];

  useEffect(() => {
    // Check if the scroll position is greater than 0 (i.e., if the page is scrolled down)
    if (window.scrollY > 0) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth',  // Smooth scroll
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
        backgroundImage="/Banners/Slider4.jpg"
        overlayColor="black/30"
        title={
          <>
            Optimizing your efficiency<br className="hidden sm:block" /> with apps
          </>
        }
        subtitle="OSquare For Individual"
        description="Get productive apps to elevate your everyday operations and drive desired results."
        buttonText="Try Now"
        buttonLink="/#/individualpricing"
        links={[
          { label: "For Enterprise", to: "/enterprise" },
          { label: "For Business", to: "/business" },
          { label: "For Education", to: "/education" },
          { label: "For Individual", to: "/individual", isActive: true },
        ]}
      />
      <div className="max-w-full">
        <Navbar
          links={navLinks}
          buttonText="Get Started"
          buttonLink="/#/individualpricing"
          scrollThreshold={550}
        />
        <Solutions
          canToggle={true}
          tabsData={tabsData}
          sectionTitle="Discover the Pinnacle of Productivity"
          sectionSubtitle="HOW IT WORK"
          gradientColors={['white', 'purple-50']}
        />
        <FeaturedNews
          headerText="FEATURED NEWS"
          subtitle={<>Discover what's happening with
            {" "}
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
          </>}
          cards={cardsData}
        />
        <AppsShowcase
          tabs={tabs}
          title="Boost your potential with"
          description="Explore apps designed to enhance your workflow and efficiency."
        />
        <AnimatePresence>
          <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
            <Innovations
              title="Transform your business with O Square"
              description="Leverage cutting-edge technology to stay ahead of the competition."
              splineSceneUrl="https://prod.spline.design/another-scene-url/scene.splinecode"
            />
            <Pricing plans={pricingPlans} />
            <CustomerStories />
            {/* <TestimonialSlider /> */}
            <Blogs />
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Individual