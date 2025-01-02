import React, { useRef } from "react";
import Hero from "../../components/Hero2";
import Navbar from "../../components/Navbar2";
import About from "../../components/About2";
import Modules from "../../components/Modules";
import DynamicCarousel from "../../components/DynamicCarousel";
import FAQ from "../../components/FAQs";
import { pageAnimation } from "../Enterprise";
import { motion } from "framer-motion";

const ischool = () => {
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
      image: "/Module Icons/attendance.svg",
      title: "Attendance",
      // description: 'Communicate seamlessly with your team',
    },
    {
      image: "/Module Icons/campus-management.svg",
      title: "Campus Management",
      // description: 'Visualize your project data and track progress',
    },
    {
      image: "/Module Icons/student-management.svg",
      title: "Student Alumni Management",
      // description: 'Track and monitor time spent on tasks',
    },
    {
      image: "/Module Icons/teacher-management.svg",
      title: "Teacher & Staff Profile Management",
      // description: 'Measure key performance indicators and work efficiency',
    },
    {
      image: "/Module Icons/parents-profile.svg",
      title: "Parent's Profile Management",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/admissions.svg",
      title: "Admissions",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/fee-management.svg",
      title: "Fee Management",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/newsletter.svg",
      title: "Announcement & Newsletter",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/communication.svg",
      title: "Communication by SMS & email",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/health-record.svg",
      title: "Health Record Management System",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/library-management.svg",
      title: "Library Management",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/data-import.svg",
      title: "Data Import & Export",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/manage-classes.svg",
      title: "Manage Classes & Subjects",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/attendance.svg",
      title: "Student's Online Attendance",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/assignments.svg",
      title: "Homework & Assignments",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/class-announcements.svg",
      title: "Class Announcements",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/classes.svg",
      title: "Class Schedule",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/discipline.svg",
      title: "Behavior & Discipline",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/examination.svg",
      title: "Examination Management",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/grades.svg",
      title: "Grading & Assignments",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/progress.svg",
      title: "Transcript & Progress Reports",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/reports.svg",
      title: "Academic Reports",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/learning-management.svg",
      title: "Learning Management",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/grade-book.svg",
      title: "Gradebook",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/interactive-assignments.svg",
      title: "Interactive Assignments",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/attendance.svg",
      title: "Attendance Record",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/events-and-birthday.svg",
      title: "Events & Birthday Updates",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/integrated-with-google.svg",
      title: "Integrated with Google Meet & Drive",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/access-to-classes.svg",
      title: "Access to Classes Schedules & Subject",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/attendance.svg",
      title: "School Attendance",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/reports-hr.svg",
      title: "Progress Report",
      // description: 'Generate comprehensive and insightful work reports',
    },
    {
      image: "/Module Icons/notifications.svg",
      title: "Announcement & Notifications",
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
      question: "What is OSquare iSchool?",
      answer:
        "OSquare iSchool is an all-in-one school management software that simplifies administration, attendance, fee management, and communication, making it easier for educational institutions to manage day-to-day operations efficiently.",
    },
    {
      question: "How does OSquare iSchool benefit teachers? ",
      answer:
        "iSchool reduces the workload for teachers by automating attendance tracking, generating academic reports, and simplifying lesson planning and grading.",
    },
    {
      question: "Can parents access student progress?",
      answer:
        "Yes, OSquare iSchool allows parents to track their child’s attendance, academic reports, and overall progress, fostering better communication between school and home.",
    },
    {
      question: "Is OSquare iSchool customizable?",
      answer:
        "OSquare iSchool offers a modular design, allowing schools to select and integrate only the features they need, making it a scalable solution that fits their specific requirements.",
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
        backgroundImage="/Banners/ischool.jpg"
        backgroundImageMob="/Banners/ischool-mob.jpg"
        style={{ backgroundSize: "contain" }}
        pricingTo={'iSchool'}
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
            Square iSchool
          </>
        }
        subtitle="School Management for OSquare"
        bgClass="bg-[#005280]"
        circleClass="bg-white"
        textClass="text-white"
        description="A sophisticated school management system that ensures smooth operations."
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
          subtitle="iSchool"
          bgClass="bg-[#005280]"
          circleClass="bg-white"
          textClass="text-white"
          // title={`Project Management for ${<span>O</span>}Square`}
          title={'School Management System '}
          description="iSchool is a powerful and innovative school management system built with advanced technology to streamline operations and eliminate the challenges of mismanagement. Designed to elevate the efficiency of school administration, iSchool is the ideal solution for schools looking to standardize and modernize their processes."
          details="With iSchool, administrators and teachers can easily make announcements and provide updates on critical information, keeping the school community informed in real-time. iSchool is the smart choice for schools seeking to enhance communication, boost organization, and create a more connected educational experience."
          imageComponent={
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('./ischool-about.png')",
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
                Square</span> iSchool
            </>
          }
        />
        <FAQ moduleRef={sectionFAQsRef} faqs={faqs} />
      </div>
    </motion.div>
  );
};

export default ischool;