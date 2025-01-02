import React from 'react'
import Hero from '../components/Hero2'
import Solutions from '../components/Solutions'
import { tab2Features, tab2Images } from '../obrain/SolutionsData';
import { pageAnimation } from './enterprise';
import { motion } from 'framer-motion';

const OBrainForWork = () => {
  const tabsData = [
    {
      label: 'Achieve excellence through O Square',
      features: tab2Features,
      images: tab2Images,
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
        title={<><span className='text-white'>OBrain for Work</span></>}
        subtitle="Welcome to OBrain"
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        description={<span className='text-white'>Supercharge your team’s productivity with the AI-driven solution for smarter workflows, and transform your workplace with OBrain for Work’s intelligent features and enhance performance effortlessly.</span>}
        circleClass="bg-white"
        textClass="text-white"
      // description={<><span className='text-[#5147e5]/50'>At OSquare, we are constantly evolving to bring cutting-edge technologies to industries across the globe. With OBrain, our advanced AI-powered platform, we take digital transformation to the next level. OBrain is the intelligent engine behind our suite of digital products, designed to enhance business operations, streamline workflows, and unlock new levels of efficiency.
      // OBrain integrates artificial intelligence capabilities into OSquare’s products, making them smarter, more intuitive, and more capable of meeting the demands of today’s fast-paced digital world.</span></>}
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />
      <section className="bg-white text-black py-16 px-6 xl:px-24 2xl:px-48">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 font-bold text-[#172554] text-3xl sm:text-4xl lg:mb-4">Unlock a Smarter, More Efficient Workday</h1>
          <p className="text-lg lg:text-xl">
            At OSquare, we believe that every business can perform smarter and more efficiently. That’s why we've designed OBrain, a platform that integrates AI seamlessly into everyday tasks to empower your workforce. With OBrain’s intelligent features, your teams can streamline their daily routines, make better decisions, and drive productivity across the board.
          </p>
        </div>
      </section>

      <section className="bg-white text-black pb-16 px-6 xl:px-24 2xl:px-48">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 font-bold text-[#172554] text-3xl sm:text-4xl lg:mb-4">How OBrain Transforms the Way You Work</h1>
          <p className="text-lg lg:text-xl">
            OBrain brings AI to the heart of every function within your business, from collaboration and communication to complex decision-making and task management. By infusing artificial intelligence into your daily work activities, OBrain ensures that your workforce works smarter, not harder.
          </p>
        </div>
      </section>
      <Solutions
        canToggle={'true'}
        tabsData={tabsData}
        // sectionTitle="Achieve excellence through O Square"
        sectionTitle="Key Features of OBrain for Work"
        sectionSubtitle="SOLUTIONS"
        gradientColors={['white', 'purple-50']}
      />

      <div className="bg-gray-50 text-gray-800 min-h-screen">

        {/* CTA Section */}
        <section className=" text-black py-20 px-6 xl:px-24 2xl:px-48">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-[#172554]">
              Ready to Enhance Your Workforce’s Performance?
            </h2>
            <p className="text-lg lg:text-xl mb-8">
              OBrian for Work offers a next-gen approach to work, leveraging the latest in AI technology to ensure your team works smarter and more efficiently. Whether you're looking to automate tedious tasks, improve collaboration, or make more informed decisions, OBrain can be the driving force behind your team’s productivity and innovation. <br />
              Start empowering your business today with OBrain where intelligence, efficiency, and growth meet. <br />
              Explore how OBrain can transform your workflow and help you achieve more, faster.
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
            {/* <a
              href="#"
              className="inline-block bg-gradient-to-r from-purple-400 to-indigo-600 text-[#fff] font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition duration-200"
            >
              Explore OBrain Today
            </a> */}
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default OBrainForWork