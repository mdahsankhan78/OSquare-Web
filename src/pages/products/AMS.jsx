import React, { useRef } from "react";
import Hero from "../../components/Hero2";
import Navbar from "../../components/Navbar2";
import About from "../../components/About2";
import Modules from "../../components/Modules";
import DynamicCarousel from "../../components/DynamicCarousel";
import FAQ from "../../components/FAQs";
import { motion } from "framer-motion";
import { pageAnimation } from "../Enterprise";

const AMS = () => {
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
      image: "./modules/dashboard.png",
      title: "DashBoard",
      // description: 'Visualize your project data and track progress',
    },
    {
      image: "./modules/payment-gateway.png",
      title: "Payment Gateway",
      // description: 'Communicate seamlessly with your team',
    },
    {
      image: "./modules/remainders.png",
      title: "Remainders",
      // description: 'Track and monitor time spent on tasks',
    },
    {
      image: "./modules/fee-management.png",
      title: "Fee Management",
      // description: 'Measure key performance indicators and work efficiency',
    },
    {
      image: "./modules/receivable-management.png",
      title: "Receivable Management",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "./modules/transactions.png",
      title: "Transaction",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "./modules/reports.png",
      title: "Reports",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "./modules/campus-management.png",
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
        backgroundImage="/Banners/ams.jpg"
        backgroundImageMob="/Banners/ams-mob.jpg"
        style={{ backgroundSize: "contain" }}
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
            AMS
          </>
        }
        subtitle="Attendance Management for OSquare"
        bgClass="bg-[#FBAD18]"
        circleClass="bg-white"
        textClass="text-white"
        description="A Cloud-Powered Attendance Management Solution for the Contemporary Workplace"
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
          subtitle="AMS"
          bgClass="bg-[#FBAD18]"
          circleClass="bg-white"
          textClass="text-white"
          title={'Effective Management Of Workforce Attendance'}
          description="The AMS Biometric Time & Attendance System offers a sophisticated, reliable solution by accurately recording employee sign-in and sign-out times through advanced biometric technology."
          details={'This innovative system eliminates common challenges such as time fraud, manual errors, and inefficiencies, ensuring precise tracking of attendance data in real time. With its user-friendly interface and seamless integration, AMS empowers organizations to streamline their attendance processes while promoting operational excellence.'}
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

export default AMS;