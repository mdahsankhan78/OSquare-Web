import React from "react";
import Hero from "../components/Hero2";
import StickyCards from "../components/ui/CustomDevelopment/StickyCards";
import { pageAnimation } from "./enterprise";
import { motion } from "framer-motion";

const CustomDevelopment = () => {
  const Processes = [
    {
      title: 'Consultation & Requirements Gathering:',
      description:
        'Understand your business challenges and define a clear project roadmap.',
    },
    {
      title: 'Custom Solution Design:',
      description:
        'Create a detailed design outlining features, functionalities, and architecture.',
    },
    {
      title: 'Development & Testing:',
      description:
        'Build and rigorously test the solution to ensure quality, security, and performance standards.',
    },
    {
      title: 'Deployment & Support:',
      description:
        'Deploy the solution and provide ongoing support for smooth adoption.',
    },
    {
      title: 'Ongoing Iteration & Improvement:',
      description:
        'Continuously update and improve your solution to align with evolving needs.',
    },
  ];
  const Solutions = [
    {
      title: 'Custom Software Development',
      description:
        'If your team needs specific functionality that isn’t available in our existing products, we can develop bespoke software tailored to your exact requirements.',
    },
    {
      title: 'Mobile App Development',
      description:
        'We offer custom mobile applications for iOS and Android to provide flexibility and on-the-go access.',
    },
    {
      title: 'Business Process Automation',
      description:
        'Automate manual processes to save time, reduce errors, and optimize workflows, empowering your team to focus on core tasks.',
    },
    {
      title: 'Application Integration',
      description:
        'Seamless integration of third-party systems, legacy applications, and OSquare products to improve workflows and data synchronization.',
    },
    {
      title: 'API Development & Management',
      description:
        'We design and develop secure, scalable APIs that enhance communication and functionality across your systems.',
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
        backgroundImage="/Banners/custom-development.jpg"
        backgroundImageMob="/Banners/custom-development-mob.jpg"
        style={{ backgroundSize: "contain" }}
        overlayColor="black/30"
        title={<><span className="text-white">Custom Development with  {' '}
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
            Square</span>
        </span></>}
        subtitle="Custom Development"
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        circleClass="bg-white"
        textClass="text-white"
        description={<><span className="text-white">We create tailored solutions that perfectly fit your business needs and goals, let’s build something unique together!</span></>}
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />


      <main className="container mx-auto py-12 px-4 sm:px-6 md:px-10 xl:px-24 2xl:px-48">
        {/* our solutions */}
        <StickyCards
          title={'Our Solutions'}
          description={'Consultio is a design studio founded in London and expanded our services, and become.'}
          alignment={'left'}
          data={Solutions} />

        {/* our progress */}
        <StickyCards
          title={'Our Processes'}
          description={'Consultio is a design studio founded in London and expanded our services, and become.'}
          alignment={'right'}
          data={Processes} />

        {/* CTA Section */}
        <section className="container mx-auto px-6 text-center pt-6">
          <h2 className="text-3xl font-bold text-[#273066] mb-4" data-aos='fade-up'>
            Get Started Today
          </h2>
          <p className="text-gray-600 mb-6">
            Ready to take your business to the next level with a custom solution? Contact us today to discuss your requirements.
          </p>
          <a
            href="/#/contact-us"
            className="inline-block bg-[#273066] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#273066]/95 transition"
          >
            Contact Us
          </a>
        </section>
      </main>
    </motion.div>
  );
};

export default CustomDevelopment;