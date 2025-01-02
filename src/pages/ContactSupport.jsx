import React from "react";
import ContactForm from "../components/contact-support/ContactForm";
import DirectContacts from "../components/contact-support/DirectContacts";
import Offices from "../components/contact-support/Offices";
import Hero from "../components/Hero4";
import { pageAnimation } from "./enterprise";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <motion.div
      className="relative min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}>
      <Hero
        backgroundImage="/Banners/contact-support.png"
        style={{ backgroundSize: "contain" }}
        title={<span className="text-center ">Contact Support</span>}
        // subtitle="Hosting for OSquare"
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        description={'We’re here to ensure your operations run smoothly. Reach out to us today for the support you need to keep moving forward!'}
        circleClass="bg-white"
        textClass="text-white"
      />
      {/* Contact Section */}
      <div className="max-w-full mx-auto px-4 py-12 sm:px-6 xl:px-24 2xl:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <ContactForm />
          <DirectContacts />
        </div>
      </div>

      {/* Offices Section */}
      <Offices />
    </motion.div >
  );
};

export default Support;