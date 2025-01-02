import React, { useRef } from "react";
import Hero from "../../components/Hero2";
import Navbar from "../../components/Navbar2";
import About from "../../components/About2";
import Modules from "../../components/Modules";
import DynamicCarousel from "../../components/DynamicCarousel";
import FAQ from "../../components/FAQs";
import { pageAnimation } from "../Enterprise";
import { motion } from "framer-motion";

const ischoolforme = () => {
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
      image: "/Module Icons/dashboard.svg",
      title: "DashBoard",
      // description: 'Visualize your project data and track progress',
    },
    {
      image: "/Module Icons/payment-gateway.svg",
      title: "Payment Gateway",
      // description: 'Communicate seamlessly with your team',
    },
    {
      image: "/Module Icons/remainders.svg",
      title: "Remainders",
      // description: 'Track and monitor time spent on tasks',
    },
    {
      image: "/Module Icons/fee-management.svg",
      title: "Fee Management",
      // description: 'Measure key performance indicators and work efficiency',
    },
    {
      image: "/Module Icons/receivable-management.svg",
      title: "Receivable Management",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/transaction.svg",
      title: "Transaction",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/reports.svg",
      title: "Reports",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/campus-management.svg",
      title: "Campus Management",
      // description: 'Generate comprehensive and insightful work reports',
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
      question: "What is OSquare What is EasyFee?",
      answer:
        "OSquare EasyFee is a comprehensive, cloud-based fee management solution designed to simplify the fee collection process for educational institutions. It automates tasks like invoicing, payment tracking, and generating receipts.",
    },
    {
      question: "How does OSquare EasyFee integrate with OSquare iSchool?",
      answer:
        "OSquare EasyFee seamlessly integrates with OSquare iSchool, synchronizing student data and enabling real-time financial reporting, invoicing, and payment tracking, improving overall administrative efficiency.",
    },
    {
      question: "Can I customize the fee structure?",
      answer:
        "Yes, OSquare EasyFee allows you to design customizable fee structures specific to different classes and students, including both one-time and recurring fee categories.",
    },
    {
      question: "Does OSquare EasyFee support online payments?",
      answer:
        "Yes, OSquare EasyFee integrates with payment gateways, enabling online fee payments, providing a convenient experience for parents and reducing administrative workload.",
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
        backgroundImage="/Banners/easyfee.jpg"
        backgroundImageMob="/Banners/easyfee-mob.jpg"
        style={{ backgroundSize: "contain" }}
        pricingTo={'EasyFee'}
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
            <span
              style={{
                fontFamily: 'Noopla',
                fontWeight: '200',
                WebkitBackgroundClip: "text",
              }}>
              Square
            </span>{' '}
            EasyFee
          </>
        }
        subtitle="Fee Management for OSquare"
        bgClass="bg-[#FBAD18]"
        circleClass="bg-white"
        textClass="text-white"
        description="Simplify and automate fee collection with a solution designed for accuracy and efficiency."
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
          subtitle="EasyFee"
          bgClass="bg-[#FBAD18]"
          circleClass="bg-white"
          textClass="text-white"
          // title={`Project Management for ${<span>O</span>}Square`}
          title={'Fee Management System '}
          description="EasyFee is a top-tier fee management solution designed to revolutionize the way schools, colleges, and educational institutions handle fee collection. Say goodbye to the hassle of paper-based bookkeeping and manual processes with our intuitive, paperless system. "
          details={'Whether you’re an accounting expert or have no prior knowledge of finance, EasyFee’s user-friendly interface makes fee management effortless for everyone. With EasyFee, you can easily create customized fee structures, streamline payment collection, and track outstanding dues all in one place.'}
          // details="HR360 facilitates all functions of the Human Resource Department that deals with recruitment, employees' management, payroll, performance, training etc."
          imageComponent={
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('./easyfee-about.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          }
        />

        {console.log(sectionModulesRef, "REPDJSH")}
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
                Square</span> EasyFee
            </>
          }
        />
        <FAQ moduleRef={sectionFAQsRef} faqs={faqs} />
      </div>
    </motion.div>
  );
};

export default ischoolforme;