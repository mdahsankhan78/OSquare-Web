import React, { useState } from 'react';
import Hero from '../components/Hero2';
import { pageAnimation } from './enterprise';
import { motion } from 'framer-motion';

const FAQs = () => {
  const faqData = [
    {
      question: "What is OSquare?",
      answer: "OSquare is a suite of digital tools for productivity, collaboration, and organization. It includes online portals, cloud storage, and project management.",
    },
    {
      question: "What type of products are included in OSquare?",
      answer: "OSquare offers fee management, team management, and other task management tools. All are designed for seamless collaboration.",
    },
    {
      question: "How much does OSquare cost?",
      answer: "OSquare offers a basic features and paid plans for advanced tools and larger storage. Visit our Pricing Page for details.",
    },
    {
      question: "Can I collaborate with others on OSquare?",
      answer: "Yes, you can collaborate in real-time on documents, spreadsheets, and more. Invite team members for efficient teamwork.",
    },
    {
      question: "How secure is my data on OSquare?",
      answer: "OSquare uses encryption and secure protocols to protect your data. Two-factor authentication (2FA) is available for enhanced security.",
    },
    {
      question: "How do I recover my account if I forget my password?",
      answer: "Click 'Forgot Password?' on the login page to receive a password reset link. Follow the instructions to regain access.",
    },
    {
      question: "What should I do if I encounter a technical issue?",
      answer: "Visit our Support Page for troubleshooting tips or submit a ticket. You can also contact our tech support team for assistance.",
    },
    {
      question: "How can I provide feedback or suggest new features?",
      answer: "Visit the Submit a Ticket page and share your ideas. We value user feedback for continuous improvement.",
    },
    {
      question: "Where can I find tutorials or help articles?",
      answer: "Check out our Knowledge Base support for helpful guides, tutorials, and troubleshooting tips. You can search for specific topics or browse categories.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero
        backgroundImage="/Banners/faqs.jpg"
        backgroundImageMob="/Banners/faqs-mob.jpg"
        style={{ backgroundSize: "contain" }}
        title="FAQs"
        // subtitle="OBrain for OSquare"
        // bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        // circleClass="bg-white"
        // textClass="text-white"
        description="Have questions? Find solutions to common inquiries and get the support you need to make the most of your experience. If you can’t find what you're looking for, feel free to reach out to us directly!"
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />
      <div className="max-w-full mx-auto px-4 py-12 sm:px-6 xl:px-24 2xl:px-48">
        {/* <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions (FAQs)</h2> */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <button
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="ml-2 text-gray-500">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQs;
