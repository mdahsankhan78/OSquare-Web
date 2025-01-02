import React, { useRef } from "react";
import Hero from "../../components/Hero2";
import Navbar from "../../components/Navbar2";
import About from "../../components/About2";
import Modules from "../../components/Modules";
import DynamicCarousel from "../../components/DynamicCarousel";
import FAQ from "../../components/FAQs";
import { pageAnimation } from "../Enterprise";
import { motion } from "framer-motion";

const EasyForms = () => {
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
      image: "/Module Icons/form-design.svg",
      title: "Form Design",
      // description: 'Visualize your project data and track progress',
    },
    {
      image: "/Module Icons/integration.svg",
      title: "Integration",
      // description: 'Communicate seamlessly with your team',
    },
    {
      image: "/Module Icons/workflow.svg",
      title: "Workflow",
      // description: 'Track and monitor time spent on tasks',
    },
    {
      image: "/Module Icons/approvals.svg",
      title: "Approvals",
      // description: 'Measure key performance indicators and work efficiency',
    },
    {
      image: "/Module Icons/hierarchy.svg",
      title: "Hierarchy",
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
      question: "What is OSquare iTeam?",
      answer:
        "OSquare iTeam is a dynamic platform offering solutions for project management and team collaboration.",
    },
    {
      question: "How do I sign up?",
      answer:
        "You can sign up by visiting our homepage and clicking 'Sign Up'.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription anytime from your account settings.",
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
        backgroundImage="/Banners/easyforms.jpg"
        backgroundImageMob="/Banners/easyforms-mob.jpg"
        style={{ backgroundSize: "contain" }}
        pricingTo={'EasyForms'}
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
            </span> EasyForms
          </>
        }
        subtitle="Forms Management for OSquare"
        bgClass="bg-[#8C373A]"
        circleClass="bg-white"
        textClass="text-white"
        description="Automate your form processes with an intuitive platform that simplifies approval workflows and tracking."
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
          subtitle="EasyForms"
          bgClass="bg-[#8C373A]"
          circleClass="bg-white"
          textClass="text-white"
          // title={`Project Management for ${<span>O</span>}Square`}
          title={'Form Management Tool'}
          description="EasyForms is the ultimate tool for businesses looking to simplify and optimize their form management process with ease. Offering intuitive, customizable solutions, this platform lets you effortlessly design, automate, and manage forms, ensuring smooth workflows from start to finish. "
          details="Whether you're crafting a personalized form, automating approval workflows, or tracking submissions, EasyForms provides everything you need. With features like seamless form imports, user-friendly editing tools, and automated processes, EasyForms helps you save valuable time and boost efficiency in your daily operations, all while keeping everything organized and hassle-free."
          imageComponent={
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('./easyforms-about.png')",
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
          className={"sm:grid-cols-2 md:grid-cols-5"}
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
                Square</span> EasyForms
            </>
          }
        />
        <FAQ moduleRef={sectionFAQsRef} faqs={faqs} />
      </div>
    </motion.div>
  );
};

export default EasyForms;