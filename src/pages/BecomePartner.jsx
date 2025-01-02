import React from "react";
import Hero from "../components/Hero2";
import PartnerCards from "../components/ui/BecomePartner/PartnerCards";
import PartnerCards2 from "../components/ui/BecomePartner/PartnerCards2";
import Form from "../components/ui/BecomePartner/Form";
import { motion } from "framer-motion";
import { pageAnimation } from "./enterprise";

const BecomePartner = () => {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero
        backgroundImage="/Banners/become-a-partner.jpg"
        backgroundImageMob="/Banners/become-a-partner-mob.jpg"
        style={{ backgroundSize: "contain" }}
        title={<span>Become a Partner with {' '}
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
          </span></span>}
        subtitle="Become a Partner"
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        circleClass="bg-white"
        textClass="text-white"
        description={<><p>At OSquare, we are committed to providing innovative digital solutions that empower businesses and individuals to succeed in the modern digital landscape. We believe in the power of collaboration, and that’s why we invite forward-thinking organizations, agencies, and individuals to partner with us.</p></>}
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />
      <div className="px-4 sm:px-6 xl:px-24 2xl:px-48 py-12">
        {/* Why Partner with OSquare */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#273066] mb-6" data-aos='fade-up'>Why Partner with OSquare?</h2>
            <ul className="space-y-4">
              <p className="text-gray-700 flex flex-col">
                <strong>Innovative Product Suite:</strong>
                <span>OSquare offers a comprehensive range of digital products designed to improve productivity, collaboration, and business management.</span>
              </p>

              <p className="text-gray-700 flex flex-col">
                <strong>Diverse Partnership Opportunities:</strong>
                <span>We offer a variety of partnership models tailored to your business.</span>
              </p>

              <p className="text-gray-700 flex flex-col">
                <strong>Competitive Revenue Sharing:</strong>
                <span>Our program provides competitive commission structures, offering substantial revenue potential.</span>
              </p>

              <p className="text-gray-700 flex flex-col">
                <strong>Training & Support:</strong>
                <span>Comprehensive training and dedicated support to ensure your success.</span>
              </p>

              <p className="text-gray-700 flex flex-col">
                <strong>Co-Marketing Resources:</strong>
                <span>Access co-branded materials and promotional tools to enhance your outreach.</span>
              </p>
            </ul>
          </div>
          <div>
            <img
              src="/partner.jpg"
              alt="Partnership Illustration"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* How It Works & Partnership Opportunities */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <div className="pb-8 text-center">
            <h2 className="text-4xl font-semibold text-[#273066] mb-6" data-aos='fade-up'>The Process that Delivers</h2>
            <PartnerCards2 />
          </div>
          <div className="py-8">
            <h2 className="text-3xl font-semibold text-[#273066] mb-6 text-center" data-aos='fade-up'>Who Should Partner with OSquare?</h2>
            <PartnerCards />
          </div>
        </section>


        {/* Get Started Form */}
        <div className="p-8 shadow-lg min-h-screen">
          <h2 className="text-4xl font-semibold text-[#273066] mb-6 text-center" data-aos='fade-up'>Ready to Get Started?</h2>
          <p className="text-gray-700 mb-6 text-center">
            Joining the OSquare Partner Program is simple! Fill out the application form below, and our team will get in touch with you to discuss the next steps.
          </p>
          <Form />
        </div>
      </div>
    </motion.div>
  );
};

export default BecomePartner;
