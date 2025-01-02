import React from 'react';
import Hero from '../components/Hero4';
import { pageAnimation } from './enterprise';
import { motion } from 'framer-motion';

const HostingPage = () => {
  return (
    <motion.div
      className="relative min-h-screen bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero
        backgroundImage="/Banners/hosting.png"
        backgroundImageMob="/Banners/hosting-mob.jpg"
        style={{ backgroundSize: "contain" }}
        title={<><span
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
          </span>’s Hosting Solutions </>}
        subtitle="Hosting for OSquare"
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        circleClass="bg-white"
        textClass="text-white"
        description="At OSquare, we provide reliable, secure, and high-performance hosting solutions tailored to meet the diverse needs of businesses and individuals. Whether you're looking to host a simple website, a complex application, or manage large volumes of data, our hosting services are designed to deliver optimal uptime, speed, and security."
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />
      <main className="container mx-auto py-12 px-4 sm:px-6 md:px-10 xl:px-24 2xl:px-48">
        <section className="mb-12">
          <h2 className="text-center text-4xl font-bold text-[#273066] mb-4" data-aos='fade-up'>Our Hosting Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostingSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-aos='fade-up'
              >
                <h3 className="text-xl font-bold text-[#273066] mb-2">{solution.title}</h3>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-[#273066] mb-4" data-aos='fade-up'>Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#273066] mb-4" data-aos='fade-up'>Why Choose OSquare Hosting?</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {whyChoose.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <a href="/#/contact-us"><button className="bg-blue-950 text-white py-4 px-6 rounded-lg hover:bg-blue-950 transition">
            Contact Us Today
          </button></a>
        </div>
      </main>
    </motion.div>
  );
};

const hostingSolutions = [
  {
    title: 'Web Hosting',
    description:
      'Perfect for small to medium-sized businesses, our web hosting services offer fast, secure, and reliable performance.',
  },
  {
    title: 'Cloud Hosting',
    description:
      'Leveraging cutting-edge technology to ensure that your data is always accessible, secure, and fully backed up.',
  },
  {
    title: 'Dedicated Hosting',
    description:
      'Enjoy exclusive server space with enhanced security and guaranteed performance for maximum efficiency.',
  },
  {
    title: 'Managed Hosting',
    description:
      'Focus on growing your business while we take care of your infrastructure with proactive monitoring and full support.',
  },
  {
    title: 'Application Hosting',
    description:
      'High availability, performance, and security for your critical applications with customizable environments.',
  },
];

const keyFeatures = [
  'High Performance & Speed: Fast loading times and minimal downtime.',
  'Scalability: Grow with your business without hassle.',
  'Security & Reliability: Top-tier features like firewalls, SSL encryption, and security audits.',
  '24/7 Support: Dedicated support team available round the clock.',
  'Easy Management Tools: User-friendly dashboard for complete control.',
];

const whyChoose = [
  'Expert Support: Hosting specialists ready to assist you at every step.',
  'Global Infrastructure: Fast and reliable services with worldwide data centers.',
  'Custom Solutions: Tailored hosting plans to match your specific requirements.',
  'Comprehensive Monitoring: Advanced systems ensure optimal performance.',
];

export default HostingPage;
