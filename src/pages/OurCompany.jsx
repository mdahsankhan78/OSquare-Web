import React from 'react';
import Hero from '../components/Hero2';
import { pageAnimation } from './enterprise';
import { motion } from 'framer-motion';

const OurCompany = () => {
  return (
    <motion.div
      className="relative min-h-screen"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero
        backgroundImage="/Banners/our-company.jpg"
        backgroundImageMob="/Banners/our-company-mob.jpg"
        style={{ backgroundSize: "contain" }}
        title={'Our Company'}
        // subtitle="Hosting for OSquare"
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        circleClass="bg-white"
        textClass="text-white"
        description={<><span className='text-black'>"OSquare provides a comprehensive suite of productivity tools that enable businesses and individuals to work smarter. Offering solutions like document management, cloud storage, and collaboration tools, OSquare is designed to streamline workflows, enhance teamwork, and ensure secure, seamless operations across industries."</span></>}
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />


      <div className="shadow-lg rounded-lg mx-4 sm:mx-6 xl:mx-24 2xl:mx-48 my-12">
        <main className="container mx-auto py-8 px-6">
          <section className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-4">
            <div>
              <h2 className="mb-8 text-4xl font-bold text-[#273066]" data-aos='fade-up'>Our Progress</h2>
              <p className="text-gray-700 text-sm sm:text-lg lg:text-xl">Founded with a vision to simplify digital workspaces, OSquare started with a small team and has grown to serve 40+ global businesses. Initially focused on managing operations digitally, OSquare expanded to include full collaboration tools and AI-powered features. The company now boasts a diverse workforce and a broad customer base, continually innovating to improve business operations.</p>
            </div>
            <img src="/Company/progress.jpg" className='rounded-lg h-full' alt="" />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/Company/culture.jpg" className='rounded-lg h-full' alt="" />
            <div>
              <h2 className="mb-8 text-4xl font-bold text-[#273066]" data-aos='fade-up'>Culture We Cultivate</h2>
              <p className="text-gray-700 text-sm sm:text-lg lg:text-xl">OSquare fosters a culture of collaboration, innovation, and continuous learning. The company encourages creative problem-solving, values diverse perspectives, and promotes equality and respect. This inclusive environment supports employee growth, contributes to innovation, and strengthens the overall company mission.</p>
            </div>
          </section>
        </main>
      </div>
    </motion.div>
  );
};

export default OurCompany;
