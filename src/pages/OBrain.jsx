import React from 'react'
import Hero from '../components/Hero2'
import Solutions from '../components/Solutions'
import { tab1Features, tab1Images } from '../obrain/SolutionsData';
import { pageAnimation } from './enterprise';
import { motion } from 'framer-motion';

const OBrain = () => {
  const tabsData = [
    {
      label: 'Achieve excellence through O Square',
      features: tab1Features,
      images: tab1Images,
      initialImage: 'accordion-1',
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
        backgroundImage="/Banners/obrain.jpg"
        backgroundImageMob="/Banners/obrain-mob.jpg"
        style={{ backgroundSize: "contain" }}
        title={<><span className='text-white'>The AI-Powered Future of Digital Innovation</span></>}
        description={<span className='text-white'>Where technology reshapes how businesses operate. With advanced artificial intelligence organizations can unlock new efficiencies. Embrace the future of innovation and stay ahead of the curve with AI-driven solutions that redefine success.</span>}
        subtitle="Welcome to OBrain"
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        circleClass="bg-white"
        textClass="text-white"
      // description={<><span className='text-[#5147e5]/50'>At OSquare, we are constantly evolving to bring cutting-edge technologies to industries across the globe. With OBrain, our advanced AI-powered platform, we take digital transformation to the next level. OBrain is the intelligent engine behind our suite of digital products, designed to enhance business operations, streamline workflows, and unlock new levels of efficiency.
      // OBrain integrates artificial intelligence capabilities into OSquare’s products, making them smarter, more intuitive, and more capable of meeting the demands of today’s fast-paced digital world.</span></>}
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />
      <section className="bg-white text-black py-16 px-6 xl:px-24 2xl:px-48">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 font-bold text-[#172554] text-3xl sm:text-4xl lg:mb-4" data-aos='fade-up'>The AI-Powered Future of Digital Innovation</h1>
          <p className="text-lg lg:text-xl">
            At OSquare, we are constantly evolving to bring cutting-edge technologies to industries across the globe. With OBrain, our advanced AI-powered platform, we take digital transformation to the next level. OBrain is the intelligent engine behind our suite of digital products, designed to enhance business operations, streamline workflows, and unlock new levels of efficiency.
            <br /><br />
            OBrain integrates artificial intelligence capabilities into OSquare’s products, making them smarter, more intuitive, and more capable of meeting the demands of today’s fast-paced digital world.
          </p>
        </div>
      </section>
      <Solutions
        canToggle={'true'}
        tabsData={tabsData}
        // sectionTitle="Achieve excellence through O Square"
        sectionTitle="AI-Powered Solutions for Every Industry"
        sectionSubtitle="SOLUTIONS"
        gradientColors={['white', 'purple-50']}
      />

      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Hero Section */}
        {/* <section className="relative text-black px-6 py-20 xl:px-24 2xl:px-48">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="mb-6 text-[#172554] font-semibold text-3xl sm:text-4xl lg:mb-4" data-aos='fade-up'>
                How OBrain Works
              </h1>
              <p className="text-lg lg:text-xl">
                OBrain is not just a tool; it’s an intelligent assistant that
                evolves with your business. By leveraging machine learning,
                natural language processing, and data analytics, OBrain enhances
                the performance of every OSquare product.
              </p>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0 flex items-center justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/879/461/large_2x/artificial-intelligence-for-problem-solving-artificial-brain-network-system-intelligence-technology-for-question-n-answer-ideas-completing-task-promotion-business-card-banner-brochure-flyer-free-vector.jpg"
                alt="OBrain Illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section> */}

        {/* Key Benefits Section */}
        <section id="benefits" className="py-16 px-6 xl:px-24 2xl:px-48 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-8 text-[#172554]" data-aos='fade-up'>
              Key Benefits of OBrain AI Capabilities
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Benefit Cards */}
              {[
                {
                  title: "Automation",
                  description:
                    "Eliminate repetitive tasks and free up valuable time for your team to focus on strategic initiatives.",
                },
                {
                  title: "Predictive Insights",
                  description:
                    "Leverage AI-powered analytics to make proactive decisions and stay ahead of trends.",
                },
                {
                  title: "Personalization",
                  description:
                    "Offer tailored experiences for users, whether they are employees, customers, or students.",
                },
                {
                  title: "Efficiency",
                  description:
                    "Streamline operations across HR, lead generation, education, and team collaboration for better results.",
                },
                {
                  title: "Scalability",
                  description:
                    "OBrain grows with your organization, adapting to your changing needs and future expansion.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow-lg bg-gray-100 hover:shadow-xl transition-shadow duration-200"
                  data-aos='fade-up'
                >
                  <h3 className="text-xl font-semibold text-[#172554] mb-4">
                    {benefit.title}
                  </h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=" text-black py-20 px-6 xl:px-24 2xl:px-48">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-[#172554]" data-aos='fade-up'>
              A Smarter and More Efficient Future
            </h2>
            <p className="text-lg lg:text-xl mb-8">
              OBrain represents the next generation of AI-driven solutions, offering businesses the tools they need to thrive in an increasingly digital world. By infusing artificial intelligence into every aspect of OSquare’s suite of products, we empower you to work smarter, improve decision-making, and drive innovation.
            </p>
          </div>
        </section>
        <section className="bg-gradient-to-r from-[#172554]/95 to-[#172554]/75 text-white py-20 px-6 xl:px-24 2xl:px-48">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to unlock the full potential of AI in your business? Let OBrain guide you into a new era of efficiency, intelligence, and success.
            </h2>
            <p className="text-lg lg:text-xl mb-8">
              Explore the power of OBrain today, and experience a smarter, more intuitive way to manage your industry-specific challenges.
            </p>
            {/* <button
              href="#"
              className="inline-block bg-gradient-to-r from-purple-400 to-indigo-600 text-[#fff] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition duration-200"
            >
              Explore OBrain Today
            </button> */}
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default OBrain