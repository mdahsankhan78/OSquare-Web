import React, { useRef } from "react";
import Hero from "../../components/Hero2";
import Navbar from "../../components/Navbar2";
import About from "../../components/About2";
import Modules from "../../components/Modules";
import DynamicCarousel from "../../components/DynamicCarousel";
import FAQ from "../../components/FAQs";
import { pageAnimation } from "../Enterprise";
import { motion } from "framer-motion";

const HR360 = () => {
  const navLinks = [
    { id: "about", label: "About" },
    { id: "modules", label: "Modules" },
    { id: "discover-more", label: "Discover More" },
    { id: "faqs", label: "FAQs" },
  ];
  const sectionAboutRef = useRef(null);
  const sectionModulesRef = useRef(null);
  const sectionDiscoverMoreRef = useRef(null);
  const sectionFAQsRef = useRef(null);
  const modulesData = [
    {
      image: "/Module Icons/profile.svg",
      title: "Profile",
      // description: 'Visualize your project data and track progress',
    },
    {
      image: "/Module Icons/employees.svg",
      title: "Employees",
      // description: 'Communicate seamlessly with your team',
    },
    {
      image: "/Module Icons/attendance.svg",
      title: "Attendance",
      // description: 'Track and monitor time spent on tasks',
    },
    {
      image: "/Module Icons/organogram.svg",
      title: "Organogram",
      // description: 'Measure key performance indicators and work efficiency',
    },
    {
      image: "/Module Icons/leaves.svg",
      title: "Leaves",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/calendar.svg",
      title: "Calender",
      // description: 'Streamline task creation with templates and automation',
    },
    {
      image: "/Module Icons/reports.svg",
      title: "Reports",
      // description: 'Schedule and manage your team availability',
    },
    {
      image: "/Module Icons/remote-team.svg",
      title: "Remote Team",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/shifts.svg",
      title: "Shifts",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/roles.svg",
      title: "Roles",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/employees.svg",
      title: "Users",
      // description: 'Monitor, track, and report expenses efficiently',
    },
  ];
  const slidesData = [
    {
      image: "./iteam/carousel/in-house.jpg",
      title: "In-House Teams",
      // description: "Manage your in-house teams efficiently.",
    },
    {
      image: "./iteam/carousel/remote.jpg",
      title: "Remote Teams",
      // description: "Collaborate with remote teams seamlessly.",
    },
    {
      image: "./iteam/carousel/freelancers.jpg",
      title: "Freelancers",
      // description: "Hire and manage freelance talent.",
    },
    {
      image: "./iteam/carousel/interns.jpg",
      title: "Interns",
      // description: "Streamline the onboarding of interns.",
    },
    {
      image: "./iteam/carousel/customers.png",
      title: "Customer Management",
      // description: "Keep track of customer interactions.",
    },
    {
      image: "./iteam/carousel/attendance.jpg",
      title: "Attendance",
      // description: "Monitor attendance and productivity.",
    },
    {
      image: "./iteam/carousel/reports.jpg",
      title: "Reports",
      // description: "Generate detailed analytics reports.",
    },
  ];
  const faqs = [
    {
      question: "What is OSquare HR360?",
      answer:
        "OSquare HR360 is an all-in-one, cloud-based HR software that manages everything from employee recruitment to retirement, streamlining HR functions such as payroll, leave management, time tracking, and performance monitoring.",
    },
    {
      question: "How does OSquare HR360 help with payroll management?",
      answer:
        "The payroll module automates salary calculations, tax deductions, and benefits distribution, ensuring timely and accurate payroll processing while maintaining compliance with relevant regulations.",
    },
    {
      question: "Is OSquare HR360 customizable for different business needs?",
      answer:
        "Yes, OSquare HR360 offers scalable features to meet the unique HR requirements of various businesses, from small startups to large enterprises.",
    },
    {
      question: "How secure is OSquare HR360?",
      answer:
        "OSquare HR360 ensures data security by using encryption and secure cloud hosting, safeguarding sensitive employee information and ensuring compliance with privacy regulations.",
    },
  ];
  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero
        backgroundImage="/Banners/hr360.jpg"
        backgroundImageMob="/Banners/hr360-mob.jpg"
        style={{ backgroundSize: "contain" }}
        pricingTo={'HR360'}
        title={
          <>
            <span
              className="text-4xl sm:text-5xl"
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
            {' '} HR360
          </>
        }
        subtitle="Human Resource Management for OSquare"
        bgClass="bg-[#FE3336]"
        circleClass="bg-white"
        textClass="text-white"
        description="Transform your HR operations with streamlined processes and enhanced efficiency."
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />

      <Navbar
        links={navLinks}
        scrollThreshold={550}
        sectionAboutRef={sectionAboutRef}
        sectionModulesRef={sectionModulesRef}
        sectionDiscoverMoreRef={sectionDiscoverMoreRef}
        sectionFAQsRef={sectionFAQsRef}
      />
      <div className="px-4 sm:px-6 xl:px-24 2xl:px-48">
        <About
          moduleRef={sectionAboutRef}
          subtitle="HR360"
          bgClass="bg-[#FE3336]"
          circleClass="bg-white"
          textClass="text-white"
          // title={`Project Management for ${<span>O</span>}Square`}
          title={'HR Solution For Every Business'}
          description="HR360 is an all-encompassing HR platform designed to manage every aspect of your workforce, from onboarding to retirement. Leveraging the power of Software as a Service (SaaS) and Cloud Computing, HR360 brings seamless, scalable solutions to your HR needs."
          details="This intuitive platform handles everything your HR department requires, including recruitment, employee management, payroll, performance evaluations, and training. HR360 offers a unified approach to optimizing your workforce, empowering your team with the tools to streamline operations, enhance productivity, and foster a thriving employee experience."
          imageComponent={
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('./hr360-about.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          }
        />
        <Modules
          moduleRef={sectionModulesRef}
          title="Modules"
          subtitle="Explore specialized services tailored to your needs, with clear deliverables and ready for immediate execution. Simply make a purchase, provide your project details, and work starts right away."
          features={modulesData}
          className={"sm:grid-cols-2 md:grid-cols-4"}
        />
        <DynamicCarousel
          moduleRef={sectionDiscoverMoreRef}
          slides={slidesData}
          heading={
            <>
              {" "}
              <span
                className="text-4xl sm:text-5xl"
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
              Square</span> {' '} HR360
            </>
          }
        />
        <FAQ moduleRef={sectionFAQsRef} faqs={faqs} />
      </div>
    </motion.div>
  );
};

export default HR360;