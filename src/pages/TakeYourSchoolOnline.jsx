import React from 'react';
import Hero from '../components/Hero2';
import { pageAnimation } from './enterprise';
import { motion } from 'framer-motion';

const TakeYourSchoolOnline = () => {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero className="text-left"
        backgroundImage="/Banners/school-online.jpg"
        backgroundImageMob="/Banners/school-online-mob.jpg"
        style={{ backgroundSize: "contain" }}
        title={
          <>
            Take Your School Online with{" "}<br />
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
            </span>
          </>
        }
        subtitle="Online School for OSquare"
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        circleClass="bg-white"
        textClass="text-white"
        description="In today’s digital age, transitioning to an online platform is essential for schools, colleges, and educational institutions. OSquare’s iSchool offers user-friendly software solutions that streamline administration, enhance communication, and improve the learning experience for students and educators."
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />
      <div className="max-w-full mx-auto px-4 xl:px-24 2xl:px-48 py-10">

        {/* Why Take Your School Online */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#273066] mb-6" data-aos='fade-up'>Why Take Your School Online with {' '}
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
            <span
              style={{
                fontFamily: 'Noopla',
                fontWeight: '200',
                WebkitBackgroundClip: "text",
              }}>
              Square
            </span>?</h2>

          <div className="space-y-8 w-1/2 pt-6">
            {/* Seamless School Management */}
            <div className="flex space-x-4">
              <div className="flex-none w-10 h-10 bg-blue-500 text-white text-2xl rounded-full flex items-center justify-center">
                <span>1</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#273066] mb-2">Seamless School Management</h3>
                <p className="text-gray-600">
                  Simplify daily operations like attendance, fees, academic reporting, and communication with an intuitive online platform.
                </p>
              </div>
            </div>

            {/* Empowering Students & Parents */}
            <div className="flex space-x-4">
              <div className="flex-none w-10 h-10 bg-green-500 text-white text-2xl rounded-full flex items-center justify-center">
                <span>2</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#273066] mb-2">Empowering Students & Parents</h3>
                <p className="text-gray-600">
                  Keep students and parents connected with real-time notifications, attendance tracking, fee management, and performance reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborate to Achieve */}
        <section className="py-8 mb-16">
          <h2 className="text-3xl font-semibold text-[#273066] text-center mb-6" data-aos='fade-up'>Collaborate to Achieve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">

            {/* Scalable & Customizable Solutions */}
            <div className="p-6 border border-gray-300 rounded-lgshadow-md" data-aos='fade-up'>
              <h3 className="text-xl font-semibold text-[#273066] mb-4">Scalable & Customizable Solutions</h3>
              <p className="text-gray-600">
                Grow with your needs as iSchool adapts to your institution’s size and future growth.
              </p>
            </div>

            {/* Enhanced Communication & Collaboration */}
            <div className="p-6 border border-gray-300 rounded-lgshadow-md" data-aos='fade-up'>
              <h3 className="text-xl font-semibold text-[#273066] mb-4">Enhanced Communication & Collaboration</h3>
              <p className="text-gray-600">
                Ensure smooth communication between teachers, students, and parents with instant updates and direct messaging.
              </p>
            </div>

            {/* Efficient Data Management */}
            <div className="p-6 border border-gray-300 rounded-lgshadow-md" data-aos='fade-up'>
              <h3 className="text-xl font-semibold text-[#273066] mb-4">Efficient Data Management</h3>
              <p className="text-gray-600">
                Streamline data storage and reporting to make informed, data-driven decisions.
              </p>
            </div>

            {/* Affordability & Reliability */}
            <div className="p-6 border border-gray-300 rounded-lgshadow-md" data-aos='fade-up'>
              <h3 className="text-xl font-semibold text-[#273066] mb-4">Affordability & Reliability</h3>
              <p className="text-gray-600">
                Access quality, secure online education management at an affordable price with flexible pricing options.
              </p>
            </div>

          </div>
        </section>


        {/* Call to Action */}
        <section className="py-8 mb-12">
          <h2 className="text-3xl font-semibold text-[#273066] mb-4" data-aos='fade-up'>Join the Digital Revolution          </h2>
          <p className="text-lg text-gray-600 mb-4">
            iSchool simplifies school management and strengthens the connection between educators, students, and parents. Ready to modernize your institution? Request a demo today and experience how iSchool can transform your school’s online operations.

          </p>
          <a
            href="/#/contact-us"
            className="inline-block bg-[#273066] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-[#273066]/95 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
    </motion.div>
  );
}

export default TakeYourSchoolOnline;