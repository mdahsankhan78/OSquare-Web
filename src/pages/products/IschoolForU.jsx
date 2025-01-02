import React, { useRef } from "react";
import Hero from "../../components/Hero2";
import Navbar from "../../components/Navbar2";
import About from "../../components/About2";
import Modules from "../../components/Modules";
import DynamicCarousel from "../../components/DynamicCarousel";
import FAQ from "../../components/FAQs";
import { pageAnimation } from "../Enterprise";
import { motion } from "framer-motion";

const ischoolforu = () => {
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
      image: "/Module Icons/notice-board.svg",
      title: "Notice Board",
      // description: 'Visualize your project data and track progress',
    },
    {
      image: "/Module Icons/attendance.svg",
      title: "Attendance",
      // description: 'Communicate seamlessly with your team',
    },
    {
      image: "/Module Icons/fee-voucher.svg",
      title: "Receive Fee Vouchers",
      // description: 'Track and monitor time spent on tasks',
    },
    {
      image: "/Module Icons/notifications.svg",
      title: "Notifications",
      // description: 'Measure key performance indicators and work efficiency',
    },
    {
      image: "/Module Icons/progress.svg",
      title: "Progress Management",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/query.svg",
      title: "Query",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/complain.svg",
      title: "Complain",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/suggestion.svg",
      title: "Suggestion",
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
      question: "What is OSquare iSchoolForU?",
      answer:
        "OSquare iSchoolForU is a mobile app designed to simplify the management of educational activities for students, parents, and educational institutions. It covers learning, administration, and communication features such as attendance tracking, fee management, and real-time notifications.",
    },
    {
      question: "How can parents track attendance?",
      answer:
        "Parents can easily monitor their child's daily attendance, including absences and punctuality, through the OSquare iSchoolForU app.",
    },
    {
      question: "What features does OSquare iSchoolForU offer?",
      answer:
        "Key features include notice boards, attendance tracking, fee voucher management, and instant notifications for school updates, assignments, and grades.",
    },
    {
      question: "How secure is OSquare iSchoolForU?",
      answer:
        "OSquare iSchoolForU prioritizes data security, ensuring that all personal information, attendance records, grades, and other sensitive data are protected with advanced encryption protocols and secure servers. Parents, students, and institutions can trust that their data is safe while using the app.",
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
        backgroundImage="/Banners/ischoolforu.jpg"
        backgroundImageMob="/Banners/ischoolforu-mob.jpg"
        style={{ backgroundSize: "contain" }}
        pricingTo={'iSchoolForU'}
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
            </span> iSchoolForU
          </>
        }
        subtitle="School Information System for OSquare"
        bgClass="bg-[#1bd23f]"
        circleClass="bg-white"
        textClass="text-white"
        description={'From schools to universities, it simplifies every aspect of educational institutions with ease.'}
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
          subtitle="iSchoolForU"
          bgClass="bg-[#1bd23f]"
          circleClass="bg-white"
          textClass="text-white"
          // title={`Project Management for ${<span>O</span>}Square`}
          title={'All-In-One Academic Data Management Solution'}
          description="iSchoolForU is a powerful mobile app designed for educational institutions and parents, offering a comprehensive solution for managing and tracking academic data. What sets iSchoolForU apart is its ability to allow parents and institutions to not only view real-time data but also export and download reports for further analysis."
          details={'iSchoolForU is the ultimate tool for educational institutions aiming to foster collaboration, improve communication, and streamline data management, all while empowering parents with greater control and insight into their child’s educational journey.'}
          // details="HR360 facilitates all functions of the Human Resource Department that deals with recruitment, employees' management, payroll, performance, training etc."
          imageComponent={
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('./ischoolforme-about.png')",
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
                Square</span> iSchool for U
            </>
          }
        />
        <FAQ moduleRef={sectionFAQsRef} faqs={faqs} />
      </div>
    </motion.div>
  );
};

export default ischoolforu;