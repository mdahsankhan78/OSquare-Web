import React, { useRef } from "react";
import Hero from "../../components/Hero2";
import Navbar from "../../components/Navbar2";
import About from "../../components/About2";
import Modules from "../../components/Modules";
import DynamicCarousel from "../../components/DynamicCarousel";
import FAQ from "../../components/FAQs";
import { pageAnimation } from "../Enterprise";
import { motion } from "framer-motion";

const Iteam = () => {
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
      title: "Dashboard & Charts",
      // description: 'Visualize your project data and track progress',
    },
    {
      image: "/Module Icons/chat.svg",
      title: "Built-in Messenger & Online Meetings",
      // description: 'Communicate seamlessly with your team',
    },
    {
      image: "/Module Icons/time-tracking.svg",
      title: "Work Time Tracking",
      // description: 'Track and monitor time spent on tasks',
    },
    {
      image: "/Module Icons/grades.svg",
      title: "KPI & Work Efficiency",
      // description: 'Measure key performance indicators and work efficiency',
    },
    {
      image: "/Module Icons/reports.svg",
      title: "Work Reports",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/tasks.svg",
      title: "Task Templates & Automation",
      // description: 'Streamline task creation with templates and automation',
    },
    {
      image: "/Module Icons/calendar.svg",
      title: "Calender & Project Planning",
      // description: 'Schedule and manage your team availability',
    },
    {
      image: "/Module Icons/costing.svg",
      title: "Project Costing & Monitoring",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/projects.svg",
      title: "Projects",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/modules.svg",
      title: "Modules",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/test-activity.svg",
      title: "Testing & QA",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/uat.svg",
      title: "UAT",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/test-result.svg",
      title: "Test Results",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/to-do.svg",
      title: "Tasks",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/tickets.svg",
      title: "Tickets",
      // description: 'Monitor, track, and report expenses efficiently',
    },
    {
      image: "/Module Icons/help.svg",
      title: "Help & Support",
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
      question: "What is OSquare iTeam?",
      answer:
        "OSquare iTeam is a comprehensive project planning and team management tool designed to help businesses and teams plan, track, and execute projects efficiently. It offers advanced features like task templates, time tracking, and team communication in one platform",
    },
    {
      question: "How can OSquare iTeam improve team communication?",
      answer:
        "OSquare iTeam includes a built-in messenger to facilitate seamless communication among team members, ensuring smooth collaboration and quick problem resolution.",
    },
    {
      question: "Can OSquare iTeam automate task management?",
      answer:
        "Yes, iTeam simplifies task management with task templates and automation features. This helps teams streamline workflows by creating recurring tasks and automating repetitive processes, saving time and improving productivity.",
    },
    {
      question: "Is OSquare iTeam suitable for remote teams?",
      answer:
        "Absolutely! iTeam is designed to support both in-house and remote teams, making it a perfect tool for managing diverse workgroups, including freelancers and interns.",
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
        backgroundImage="/Banners/iteam.jpg"
        backgroundImageMob="/Banners/iteam-mob.jpg"
        style={{ backgroundSize: "contain" }}
        pricingTo={'iTeam'}
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
            </span> iTeam
          </>
        }
        subtitle="Project Management for OSquare"
        bgClass="bg-[#b429b9]"
        circleClass="bg-white"
        textClass="text-white"
        description="Perfect for startups, corporate teams, and remote operations, it streamlines workflows and drives goal achievement."
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
          subtitle="iTeam"
          bgClass='bg-[#b429b9]'
          circleClass="bg-white"
          textClass="text-white"
          // title={`Project Management for ${<span>O</span>}Square`}
          title={'Team Management System '}
          description="iTeam is the ultimate solution for team management, crafted to bring structure, seamless collaboration, and unmatched efficiency to your workplace. Whether you're steering a growing startup, managing a corporate team, or overseeing a remote workforce, iTeam is here to help you simplify your processes, enhance communication, and elevate team performance."
          details="With iTeam, you can effortlessly organize tasks, track progress, and foster collaboration whether your team is in the same office or spread across the globe. Its intuitive interface and powerful features ensure that every team member is aligned, every goal is within reach, and every project is on track."
          imageComponent={
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('./iteam-about.png')",
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
                Square</span> iTeam
            </>
          }
        />
        <FAQ moduleRef={sectionFAQsRef} faqs={faqs} />
      </div>
    </motion.div>
  );
};

export default Iteam;
